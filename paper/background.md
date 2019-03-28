\cleardoublepage

\chapter{Background}
Before delving into previous literature and its relevance to this work and the fields of NLP and language learning as a whole, we detail both voice conversion and accent conversion in order to help better distinguish them. We also explain some common speech technology concepts typically used in these systems at a high level in order to make the current work more accessible to those unfamiliar with the area.

# Voice conversion
To properly frame voice conversion, we take a look at \textcite{mohammadi2017} who present a recent overview of the subfield. Following a definition set forth by the authors, voice conversion refers to the transformation of a speech signal of a *source speaker* to make it sound as if it were uttered by a *target speaker* in any chosen fashion with the utterance still being intact. Some of these changes can include changes in emotion, accent, or phonation (whispered/murmured speech). There have been a number of proposed uses for VC, including the transformation of speaker identity (perhaps for voice dubbing), personalized TTS systems, and protection against biometric voice authentication systems. 

Voice conversion often involves a large number of processes, one of which includes deciding the appropriate type of data. To start, one must decide whether to have parallel or non-parallel speech data. Parallel speech data refers to speech data that has source and reference speakers that say the same utterance, so only the speaker-specific information is different, while non-parallel data would indicate datasets where the utterances are not the same, and thus entail further processes to create a target waveform. Even though parallel corpora are more desirable as it reduces the footprint necessary for conversion, parallel corpora are often curated for specific purposes and are not available in most cases. Because of its simplicity, in some cases, researchers have tested making a psuedo-parallel corpus using acoustic clustering when working with non-parallel data \parencite{lorenzo-trueba2018, sundermann2006}.

Other aspects that need to be considered as discussed by \textcite{mohammadi2017} include whether the data is text-dependent or text-independent. Text-dependent corpora indicate that the data has word or phonetic transcription, which can ease the alignment process during training, while systems using text-independent data would need to find similar speech segments, using a method like acoustic clustering before training. Finally, one minor aspect that is not considered often is the languages of the source speaker and target speaker. Although many systems tend to focus on voice conversion between two native speakers of the same language, systems that aim to convert between two speakers speaking in different languages would have to be wary of potential mapping issues between sounds. This is especially important to consider in terms of accent conversion, which will be discussed in the following section.

Aside from considering these aspects of the corpora, the type of features extracted from the waveforms heavily impact the quality of the conversions. In investigating the most salient features of speaker individuality, previous researchers have concluded that the average spectrum, formants, and average pitch level are the most relevant. Concretely, the average spectrum, or the average of the spectral envelopes/curves in the frequency-amplitude domain is particularly useful for speaker individuality as it captures voice quality/timbre information. That is to say, while the general shape of the spectra may be somewhat similar for a single utterance due to the equivalent sounds, the spectra would also contain nuanced information on _how_ an utterance was pronounced. Similarly, formants, the concentration of energy around certain frequencies, are useful for capturing speaker characteristics as although they retain mostly similar spacing between frequencies across phonemes, they can also be affected by physical features such as the length of a speaker's vocal tract. This means that although a certain sound may be most typically represented by 3 formants separated by 1000Hz each, one speaker may pronounce it with the formants at 500Hz, 1500Hz, and 2500Hz, and another may pronounce it at 1000Hz, 2000Hz, and 3000Hz.

Following these conclusions, most VC systems focus on converting these features, and often work at the frame-level (windows of \begin{math}\sim\end{math}20ms), with the assumption that the frame represents a stationary sound. From these frames, there are a number of common local features that are extracted to represent the signal. These include the cepstrum, line spectral frequencies (LSF), and the aforementioned spectral envelope and formants. Like the spectral envelope, line spectral frequencies represent a speech signal in the frequency-amplitude domain, while the cepstrum can capture characteristics of individual sounds in the source-filter model of speech. We describe the cepstrum in greater detail in \autoref{technical-background} alongside the feature extraction process.

On top of these local frame-based features, contextual features can be considered as well as the local features alone are often limited in what they can model. These contextual features can be as simple as adding delta and delta delta features, although methods such as event-based encodings have been tested as well. With event-based encodings, a sequence of local features are separated into different event targets and transitions to model an utterance. However, this method faces the challenge of properly defining events within the sequence. Thus, although many algorithms and methods exist to model a signal, most systems focus on working with mel-frequency cepstrum coefficents (MFCCs) and deltas/double deltas, as they are very standard in most speech synthesis and recognition systems in general. The extraction process of MFCCs and deltas/double deltas are described in in \autoref{technical-background}. 

After the chosen features are extracted, the features between the source speaker and target speaker have to be matched to prepare them for conversion. In parallel conversion, this means that each sound in an utterance has to be mapped between the speakers, which can be done manually but more often is done using an algorithm such as dynamic time warping (DTW), which looks for the shortest path to match similar sounds regardless of duration.

Although this is usually an effective algorithm to find the best alignment, there can be issues in aligning the sounds as it assumes that the same phonemes of the speakers have similar features \parencite{mohammadi2017}. This can be improved upon by adding phonetic transcription, or using methods such as forced alignment, but these methods may also have other limitations.

With non-parallel voice conversion, the alignment process becomes more complex as utterances from the source and target speakers have to be broken down into individual phonemes, and then the desired sounds must somehow be collected and synthesized to produce the converted speech. This can be done using methods like unit-selection text-to-speech (TTS), but this requires a large amount of annotated training data. Algorithms such as INCA can be used in addition to work without annotation by iteratively searching for the best frame pairs. Further information on the various alignment methods are detailed within \textcite{mohammadi2017}. 

When the best frames between the source and target speakers are finally matched, a method has be to chosen to map the relationship between the frames. This has traditionally been done by using Gaussian Mixture Models, although neural networks have also become prevalent as well as they become ubiquitous throughout computational modeling. A detailed but accessible explanation of these algorithms and how they function is provided in \autoref{technical-background}.

A visual representation that summarizes the voice conversion process can be seen in \autoref{fig:vc-flowchart}.

\begin{figure}[]
\centering
\includegraphics[scale=0.25]{img/vc-flowchart.png}
\caption{The training and conversion processes of a typical VC system. Taken from \textcite{mohammadi2017}.}
\label{fig:vc-flowchart}
\end{figure} 


# Accent conversion
Like voice conversion, accent conversion is dedicated to convert the speech of a *source speaker* into sounding like a *target speaker*. However, accent conversion is specifically focused on morphing the *accent* of the speech signal, as opposed to sounding directly like the target speaker. Succinctly stated, "Accent conversion seeks to transform second language L2 utterances to appear as if produced with a native (L1) accent," \parencite{aryal2014a}. Because the confusion that can arise from using the terminology *source speaker* and *target speaker*, the *source speaker* is often referred to as the native or L1 speaker, while the *target speaker* is referred to as the non-native or L2 speaker. This seems somewhat counter-intuitive, but this allows for us to create a voice that retains the non-native speaker's identity and the native speaker's accent \parencite{zhao2018a}.

Accent conversion poses a further challenge on top of voice conversion as the audio of the source speaker and target speaker cannot simply be forced-aligned due to the fact that the voice quality and accent of the target speaker would remain \parencite{aryal2014}. This means that accent conversion may require more specialized alignment methods beyond standard frame-by-frame alignment that can help preserve the right speaker information while suppressing the other undesired information. This is further discussed in the examination of previous work in accent conversion in \autoref{accent-conversion}.


# Technical Background

\subsection{Mel-frequency cepstrum coefficients}
Before any actual speech processing can happen, the speech signal needs to be broken down into sizable and meaningful representations. This is most traditionally done by using mel-frequency cepstrum coefficients (MFCCs) to create vectorized representations of the acoustic information. Although MFCCs can be extracted fairly easily using a number of tools or available packages, there are a number of steps required before a speech signal can be represented as a sequence of _N_ number of MFCC vectors. As the feature extraction process is heavily related to standard signal processing as well as acoustic and articulatory phonetics, the motivation and ideas utilized to extract features from speech signals can be extended into one large body of work itself. In order to succinctly describe the MFCC extraction process, we reference \textcite{jurafsky2009}.

The most common first step in feature extraction for speech signals is referred to as _pre-emphasis_. When we produce various sounds, the energy that each sound contains is often concentrated around the lower frequencies, which causes information in the higher frequencies to be obstructed. This is referred to as spectral tilt and is caused by the physiological nature of the speech production system. In order to balance the energy in the speech signal, the speech signal is passed through a filter which boosts the amount of energy in the higher frequencies. In terms of signal processing, this filter is referred to as a first-order high pass filter and can be represented using the formula seen in \autoref{eq:pre-emphasis-filter} where $x[n]$ refers to the original signal and $\alpha$ is 0.9 $\leq$ 1.0. 

\begin{equation}
\label{eq:pre-emphasis-filter}
y[n] = x[n] - \alpha x[n - 1]
\end{equation}

After the speech signal goes through pre-emphasis, the speech signal can be separated into smaller parts such as phones or subphones. Because the speech signal usually contains a whole word or utterance, it is desirable to capture consistent or 'stationary' points of the signal. This is done by going over the speech signal using a process called _windowing_,  where each window is assumed to contain a non-changing part of the signal. These windows usually contain between 10ms to 30ms of speech, and usually overlap about 30% - 50% with the previous window in order to retain all of the necessary information from each part of the signal. After the windowing process, the speech signal is said to be split up into N number of _frames_. The windowing process can be represented using the formula seen in \autoref{eq:windowing} where the signal $s[n]$ is multiplied by the window value $w[n]$ at each time $n$. A visual representation of the windowing process recreated from \textcite{demarco2015} can be seen in \autoref{fig:frame-blocking}. 

\begin{equation}
\label{eq:windowing}
y[n] = w[n]s[n]
\end{equation}

\begin{figure}[]
\centering
\includegraphics[scale=0.3]{img/frame_blocking.png}
\caption{The windowing process. A reduplication of an image from \textcite{demarco2015}.}
\label{fig:frame-blocking}
\end{figure} 

Even though the word 'window' might suggest that its shape would be a rectangle, a rectangular window on its own most often leads to distorted information because of the sudden cuts that occur on the edges of the signal. In order to address this problem, special windowing functions such as the Hamming window, are used to decrease the values on the ends of a frame. An example of windowing can be seen in \autoref{fig:rect-vs-hamming}, where the hamming window can be seen tapering off on the edges compared to the rectangular window. 

\begin{figure}[]
\centering
\includegraphics[scale=0.25]{img/windowing.png}
\caption{An example of the rectangular window vs. the Hamming window on a signal. Taken from \textcite{lebourdais2015}.}
\label{fig:rect-vs-hamming}
\end{figure} 

After the signal is separated into different windows, the spectral information can be extracted using a special tool or formula known as the Discrete Fourier Transform (DFT). This allows us to find how much energy is in specific frequency bands. By passing the windowed discrete signal through the Discrete Fourier Transform, we can get a complex number that contains the magnitude and phase for each frequency component. After the Discrete Fourier Transform, the frequencies are converted onto the _mel_ scale, using a set of filters called mel filter banks. The purpose of the mel scale is to represent human hearing, which is more sensitive to lower pitch sounds (under 1000Hz) as compared to higher pitch sounds. In the mel scale, sounds below 1000Hz are placed on a linear scale, while sounds above 1000Hz are on a logarithmic scale. The mel filter banks can be seen in \autoref{fig:mel-filter-banks}. 

\begin{figure}[]
\centering
\includegraphics[width=1\textwidth]{img/mel_filters.jpg}
\caption{Mel-filter banks. Taken from \textcite{fayek2016}.}
\label{fig:mel-filter-banks}
\end{figure} 

Afterwards, the _cepstrum_ is calculated in order to separate source information from filter information. From a high level, the source-filter theory says that all sounds come from the glottis (the area around our throat) and below, which contains information common to all speech sounds, such as the fundamental frequency (or pitch) of someone's voice, as well as glottal pulse information. This is compared to the filter, which says that adjusting the vocal tract (e.g. moving the tongue and other articulators) define each individual sounds. By retaining just the filter information, we can model an individual phone. In terms of the given cepstral values, the first 12 cepstral values are taken as they neatly represent the filter information. In terms of signal processing, the cepstrum is calculating by using the 'inverse discrete Fourier Transform of the log magnitude of the DFT of a signal'.The formula for calculating the cepstrum can be seen in \autoref{eq:cepstrum}, where $x[n]$ represents our initial signal, $e$ represents Euler's number ($\sim2.718$), $j$ represents an imaginary power, $N$ represents the number of time samples from the signal, $n$ represents the current sample, and $k$ represents the current frequency between 0 and $N-1$ Hertz \parencite{azad2017}. While the Fourier Transform is challenging to follow mathematically, \autoref{fig:signal-to-cepstrum} succinctly summarizes the process.

\begin{equation}
\label{eq:cepstrum}
c[n] = \sum_{n=0}^{N-1}log\bigg(\bigg|\sum_{n=0}^{N-1}x[n]e^{{-j\frac{2\pi}{N}kn}}\bigg|\bigg)e^{j\frac{2\pi}{N}kn}
\end{equation}

\begin{figure}[]
\centering
\includegraphics[width=1\textwidth]{img/signal-to-cepstrum.jpg}
\caption{The waveform to spectrum to cepstrum process.}
\label{fig:signal-to-cepstrum}
\end{figure} 

Even though these steps alone could be used to model a speech signal, additional information is often added to further better model each frame. Among this information is energy, which can help us further distinguish a sound, as vowels and sibilants ('breathy' sounds like /s/ or /f/) have more energy compared to stops ('hard' sounds like /k/ or /p/). Energy is calculated using the formula seen in: \autoref{eq:energy} where $x$ represents the signal and $t$ represents a point in time.

\begin{equation}
\label{eq:energy}
Energy = \sum_{t=t_1}^{t_2}x^2[t]
\end{equation}

On top of the 12 MFCC features and 1 energy feature, features known as deltas and double deltas are often added to represent the change in the speech signal frame to frame. Concretely, deltas can be used to model changes in formants or a change from stop closure to stop release. Double deltas are then added to represent the changes between deltas, which provide further precision in modeling an utterance. In total, this gives us 39 MFCC features from:

\begin{itemize}
   \setlength\itemsep{-1em}
   \item{\textbf{12} cepstral coefficients}
   \item{\textbf{12} delta cepstral coefficients}
   \item{\textbf{12} double delta cepstral coefficients}
   \item{\textbf{1} energy coefficient}
   \item{\textbf{1} delta energy coefficient}
   \item{\textbf{1} double delta energy coefficient}
\end{itemize}

A visual representation of the whole MFCC extraction process can be seen in \autoref{fig:mfcc-extraction}.

\begin{figure}[]
\centering
\includegraphics[scale=0.24]{img/mfcc-extraction.png}
\caption{The extraction of sequence 39-dimensional MFCC vectors from a waveform. Taken from \textcite{jurafsky2009}.}
\label{fig:mfcc-extraction}
\end{figure} 

\subsection{Gaussian mixture models}
A Gaussian mixture model is a type of probablistic model that aims to represent normally distributed groups within a set. This is based on the idea of the normal, or *Gaussian* distribution, which can be see in \autoref{fig:gaussian-dist}. The Gaussian distribution is characterized by two main features: the mean (the arithmetic average of the data) and the variance (the spread of the data from the mean). The Gaussian distribution is the most important distribution used in probablistic modeling as it has been theorized that the average of independent random variables would look like a normal distribution \parencite{mcgonagle2016}.

\begin{figure}[]
\centering
\includegraphics[scale=0.40]{img/gaussian-dist2.png}
\caption{The Gaussian distribution with different means (\( \mu \)) and standard deviations (\( \sigma \)).}
\label{fig:gaussian-dist}
\end{figure} 

Gaussian mixture models are based on the principle that if a unimodal (one 'peak') dataset can be fit with a Gaussian distribution, then a multimodal (multi 'peak') dataset is just a 'mixture' of smaller Gaussian distributions. A common example given to understand the Gaussian distribution and Gaussian mixture models often references height. It is often said that men are taller than women on average, with men being 178cm (5 foot 10 inches), and women being 165cm (5 foot 5 inches). If we used two separate Gaussians to model each gender, we could 'mix' them to model the likelihood of a certain data point (e.g. person) being a male or a female \parencite{mcgonagle2016}. For example, using a hypothetical example with the averages previously mentioned, we could see that the likelihood of a person that is 168cm is more likely to be a male than a female. This is demonstrated in \autoref{fig:gmm-height}. The probabilities are calculated as the following: the Male is P(66in) = .065 / (.065 + .104) = .38 and the Female P(66in) = .104 / (.065 + .104) = .62, meaning that that for someone 66 inches, it would be much more likely that they are a woman.  

\begin{figure}[ht!]
\centering
\includegraphics[scale=0.15]{img/gmm-height.png}
\caption{An example of a GMM using male and female height. The likelihoods for each gender for someone 168cm (66in) tall is calculated using the percentage of men and women in the dataset from the vertical axis.} 
\label{fig:gmm-height}
\end{figure} 


However, as simple as this sounds the most advantageous point of the Gaussian mixture model is the fact that it is an _unsupervised_ model that can be used when the subpopulations of the data are unknown. Thus, following the previous example of height, a Gaussian mixture model could be used to model the height of the two genders _without_ knowing the gender of each data point.

Because it is an _unsupervised_ model, it requires a special method to estimate the appropriate parameters. The most common method used for this is known as _expectation maximization_. This algorithm is used for maximum likelihood estimation. In mathematical terms, this can be represented by observing the average log-likelihood to know whether the GMM is modeling a set of vectors R well. A higher average log-likelihood indicates that the GMM is performing well. The formula from calculating average log-likelihood, taken from \textcite{kinnunen2009}, can be seen in \autoref{eq:max-log-like} where $M$ represents the number of components, $K$ represents the number within the codebook, $m$ describes the $m$\textsuperscript{th} Gaussian component, $P_m$ is the prior probability of the $m$\textsuperscript{th} Gaussian component, $\Sigma _m$ represents the co-variance matrix and $\mu _m$ represents the mean vector.

\begin{equation}
\label{eq:max-log-like}
LL_{avg}(R,\lambda) =\frac{1}{K}\sum_{i=1}^Klog\sum_{m=1}^{M}P_mN(r_k|\mu_m,\Sigma_m)
\end{equation}

In other words, this algorithm tries to find the most appropriate group for each datapoint by calculating the probability of it being in a certain group and selecting the most likely one. This is done iteratively by initializing reasonable values, and then calculating the probability of membership in each cluster (the _expectation_ step) and updating each clusters location, normalization and shape using the probabilities calculated (the _maximization_ step) until the algorithms converge \parencite{vanderplas2016}. A visual example of the convergence process can be seen in \autoref{fig:em-converge}.

\begin{figure}[]
   \centering
   \begin{subfigure}[b]{0.4\textwidth}
      \includegraphics[width=1\textwidth]{img/em-alg2.jpg}
         \caption{Initialization}
         \label{fig:gmm-init}
   \end{subfigure}
   \quad
   \begin{subfigure}[b]{0.4\textwidth}
      \includegraphics[width=1\textwidth]{img/em-alg3.jpg}
         \caption{Mid-convergence}
         \label{fig:gmm-mid}
   \end{subfigure}
   
   \begin{subfigure}[b]{\textwidth}
      \centering
      \includegraphics[width=0.45\textwidth]{img/em-alg4.jpg}
         \caption{Converged}
         \label{fig:gmm-conv}
   \end{subfigure}
   \quad
   \caption{Gaussian Mixture Model convergence using the Expectation-Maximization algorithm. Taken from \textcite{mcgonagle2016}.}
   \label{fig:em-converge}
\end{figure}

Due to the complexity of the formulas, the mathematical representations for the expectation-maximization steps are taken from the discussion of \textcite{demarco2015} which in turn cites \textcite{rose1990}. The formulas are represented as follows.

1. The E-Step: The posterior probabilities are calculating for all of the training vectors of a given class model $\lambda$ using \autoref{eq:e-step}.

\begin{equation}
\label{eq:e-step}
P(m|r_n,\lambda) = \frac{P_mN(r_n|\mu_m,\Sigma_m)}{\sum_{i=1}^MP_iN(r_n|\mu_i,\Sigma_i)}
\end{equation}

2. The M-Step: The M-Step utilizes the posterior probabilities from the E-Step to estimate model parameters using \autoref{eq:m-step1},\autoref{eq:m-step2} and \autoref{eq:m-step3}.

\begin{equation}
\label{eq:m-step1}
\hat{p}_m = \frac{1}{K}\sum_{k=1}^{K}P(m|r_k,\lambda)
\end{equation}

\begin{equation}
\label{eq:m-step2}
\hat{\mu}_m = \frac{\sum_{K=1}^{K}P(m|r_k,\lambda)r_k}{\sum_{K=1}^{K}P(m|r_k,\lambda)}
\end{equation}

\begin{equation}
\label{eq:m-step3}
\hat{\Sigma}_m=\frac{\sum_{k=1}^{K}P(m|r_k,\lambda)(r_k - \hat{\mu}_m)(r_k-\hat{\mu}_m)^T}{\sum_{k=1}^{K}P(m|r_k,\lambda)}
\end{equation}


3. Set $P_m = \hat{P}_m$, $\mu_m = \hat{\mu}_m$, and $\Sigma_m = \hat{\Sigma}_m$ and repeat the E-step and M-step until convergence. 


This model can be compared to the _k_-means clustering algorithm, as both can be used to cluster different subgroups. Like the _k_-means algorithm, GMMs also require us to specify a number of components, which usually indicate the number of subgroups we hope to cluster. However, _k_-means suffers from not using a probablistic model to assign clusters, which means that data points can only be assigned to exactly one cluster. The cluster shape of _k_-means is also limited to only circles, which makes it inadequate to model data with different distributions. GMMs manage to address these issues by using the expectation-maximization algorithm to calculate the probabilities of cluster assignment and by allowing for different covariance types which permits for different cluster shapes beyond the circle. Aside from being useful as an unsupervised classification algorithm, GMMs can also be seen as a generative algorithm as it models the overall distribution of the data \parencite{mcgonagle2016}. This means that a GMM can be used to generate new data points following the distribution of the given data set. 

In the case of speech, Gaussian mixture models are most often used to model individual sounds using MFCC feature vectors. The usage of Gaussian mixture models to classify vocal features became popularized through the work and success of \textcite{reynolds1995} . Because MFCC feature vectors are multi-dimensional (\begin{math} \sim \end{math}39-dimensions), the Gaussians within the model are also multi-variate. However, the same principles described above still stand, and allow us to calculate the probability of a sound from a given frame. More formally, the most likely class for a an utterance can be described using the formula seen in \autoref{eq:gmm-calculate} taken from \textcite{oshaughnessy1999}, where T is the test utterance and $\lambda^n$ is the GMM.

\begin{equation}
\label{eq:gmm-calculate}
N^* = \argmax_{1\leq n \leq}P(\lambda^n|T) = \argmax_{1\leq n \leq} \frac{P(T|\lambda^P)P(\lambda^n)}{P(T)}
\end{equation}


\subsection{Neural networks}

As indicated by its name, neural networks or more formally, _artificial neural networks_ are said to be based on the architecture of the brain's neurons. Like the human decision making process, neural networks take in a certain amount of information or _input_, to make a decision, or more formally, to give an _output_. This idea can be easily understood by taking a look at the _perceptron_, the most simple form of an artificial neuron.

\begin{figure}[]
\centering
\includegraphics[scale=0.20]{img/perceptron.png}
\caption{A visual representation of the perceptron.}
\label{fig:perceptron}
\end{figure} 

A perceptron takes in a number of binary inputs (represented in the image by $x_1, x_2, x_3$) and outputs a single binary output \parencite{nielsen2015}. The output is determined by whether the inputs are less than or greater than a defined threshold, and each input can be weighted to represent the importance of that input in determining the output. Mathematically, this can be represented as the following where $w$ represents the weight and $x$ represents a particular value:

\begin{equation*}
    output=\begin{cases}
        0 & \text{if $\sum_{j} w_jx_j \leq$ threshold} \\
        1 & \text{if $\sum_{j} w_jx_j >$ threshold}
    \end{cases}
\end{equation*}

 
To provide a concrete example, we can use a yes-no question (with 0 representing 'no', and 1 representing 'yes') such as:

_"Will I watch another episode of this TV show?"_

As 'inputs', we can use the following questions:

1. Do I like this show?
2. Is it still before my bedtime?
3. Am I free tomorrow?

To decide the weights of these 'inputs', we can consider how important we think each question is. Perhaps the most important question is Question #1, and thus we can assign a weight of 4, while the other 2 may receive a weight of 2 and 1 respectively.

Finally, we need to define a threshold to determine whether we output a 0 (no) or a 1 (yes). Evidentally, the lower the threshold, the more likely we're going to watch another episode. For example, with the given weights and a threshold of 2, we have the following possible outputs for each question:

1. 4 * 1 = 4 OR 4 * 0 = 0 
2. 2 * 1 = 2 OR 2 * 0 = 0
3. 1 * 1 = 1 OR 1 * 0 = 0

We can see that we would end up with a final output of 1 (yes) in the case that it is still before our bedtime (2 points) and/or if we like this show (6 points/4 points), and regardless of whether we are free tomorrow.

Even though the previous notation of the perceptron is more simple, the perceptron, and more generally speaking, the neuron is more often described in the following notation where w represents a vector of the weights, x represents a vector of the inputs, and b represents _bias_, to replace the threshold.


\begin{equation*}
    output=\begin{cases}
        0 & \text{if $w * x + b \leq$ 0} \\
        1 & \text{if $w * x + b >$ 0}
    \end{cases}
\end{equation*}

The bias can be understood as being equivalent to -threshold. It can also be understood in terms of the neuron metaphor of how easy it is to get the neuron to 'fire'. That is to say, the bigger the bias, the more likely we output a 1, and the smaller the bias, the more likely we output a 0. 

Although perceptrons are very simple to understand, they tend to not function well in more complex situations due to their structure. In particular, a small change in the weights could easily cause the output to go from a 1 to 0 and vice versa. Of course, in the case of the example above, this may not matter too heavily, but in training large systems, this property is too afflicting to be reliable \parencite{nielsen2015}. 

Instead, the most basic neuron used in machine learning is the _sigmoid_ neuron, which as the name indicates, utilizes the sigmoid function to decide the threshold. This prevents the neuron from being affected by small changes like the perceptron, as the decision function is no longer linear. The sigmoid neuron is also much more flexible, as it no longer requires a binary input and can instead take on any values between 0 and 1. Aside from the sigmoid, there are other non-linear functions that can be used, such as the tanh function or another known as the rectified linear unit (ReLU) which can offer slight improvements over the sigmoid depending on the task. In general, these non-linear functions are what give neural networks their vast power to 'learn' \parencite{nielsen2015}.

While a single neuron may be able to make very basic decisions, it is through a combination of them that we can make more complex systems that do tasks such as named entity recognition, object detection and voice conversion. From here, we get the name of neural _network_. In \autoref{fig:neural-network}, we see an example of a more typical neural network.

\begin{figure}[]
\centering
\includegraphics[scale=0.35]{img/neural-network.png}
\caption{An example of a neural network.}
\label{fig:neural-network}
\end{figure} 

In the example above, we have three inputs and two outputs, and a new concept known as a _hidden layer_. The hidden layer is said to be able to 'uncover' more additional information about the input in order to better decide the output. While the current example only has one hidden layer, the currently popular 'deep learning' comes from adding multiple hidden layers to create a large neural network structure. Like hidden layers, the number of inputs and the number of puts can vastly vary depending on the dataset. For example, in the case of part-of-speech tagging, we would like the input and output size to be the same per sentence, as we need to have a part-of-speech tag applied to each word. The output layer can the output the probability of each possible part-of-speech tag (noun, verb, adjective, etc.) per word, and we can select the most probable as that word's part-of-speech.

While neural networks are described at a high level here in order to facilitate general understanding of this work, more complex neural network architectures and features are not addressed here. Further reference regarding neural networks can be found in \textcite{nielsen2015}, the main reference for the description here, and \textcite{goldberg2017}, which provides both an overview on neural networks and discussion of their use in natural language processing. 

Neural networks in the context of voice/accent conversion will be further described in \autoref{accent-conversion}.

