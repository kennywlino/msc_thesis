\cleardoublepage

\chapter{Background}
Before delving into previous literature and their relevance to this work and the fields of NLP and language learning as a whole, I detail both voice conversion and accent conversion in order to help better distinguish them. I also go over some common speech technology concepts typically used in these systems at a high level in order to make the current work more accessible to those unfamiliar with the area. Further reference is also provided for those interested in the technical aspects and formalisms. 


# Voice conversion
To properly frame voice conversion, we take a look at \textcite{mohammadi2017} who present a recent overview of the subfield. Following a definition setforth by the authors, voice conversion refers to the transformation of a speech signal of a *source speaker* to make it sound as if it were uttered by a *target speaker* in any chosen fashion with the utterance still being intact. Some of these changes can include changes in emotion, accent, or phonation (whispered/murmured speech). there have been a number of proposed uses for VC, including the transformation of speaker identity (perhaps for voice dubbing), personalized TTS systems, and against biometric voice authentication systems. 

Voice conversion often involves a large number of processes, one of which includes deciding the appropriate type of data. To start, one must decide whether to have parallel or non-parallel speech data. Parallel speech data refers to speech data that has source and reference speakers that say the same utterance, so only the speaker-specific information is different, while non-parallel data would indicate datasets where the utterances are not the same, and thus entail further processes to create a target waveform. Even though parallel corpora are more desirable as it reduces the footprint necessary for conversion, parallel corpora are often curated for specific purposes and are not available in most cases. Because of its simplicity, in some cases, researchers have tested making a psuedo-parallel corpus using acoustic clustering when working with non-parallel data \parencite{lorenzo-trueba2018, sundermann2006}.

Other aspects that need to be considered as discussed by \textcite{mohammadi2017} include whether the data is *text-dependent* or *text-independent*. Text-dependent corpora indicate that the data has word or phonetic transcription, which can ease the alignment process during training, while systems using text-independent data would need to find similar speech segments, using a method like acoustic clustering before training. Finally, one minor aspect that is not considered often is the languages of the source speaker and target speaker. Although many systems tend to focus on voice conversion between two native speakers of the same language, systems that aim to convert between two speakers speaking in different languages would have to be wary of potential mapping issues between sounds. This is especially important to consider in terms of accent conversion, which will be discussed in the following section.

Aside from considering these aspects of the corpora, the type of features extracted from the waveforms heavily impact the quality of the conversions. In investigating the most salient features of speaker individuality, previous researchers have concluded that the average spectrum, formants, and average pitch level are the most relevant. Following these conclusions, most VC systems focus on converting these features, and often work at the frame-level (windows of \begin{math}\sim\end{math}20ms), with the assumption that the frame represents a stationary sound. From these frames, there are a number of common local features that are extracted to represent the signal. These include the spectral envelope, cepstrum, line spectral frequencies (LSF) and the aforementioned formants. On top of these local frame-based features, contextual features can be considered as well as the local features alone are often limited in what they can model. These contextual features can be as simple as adding delta and delta delta features, although methods such as something known as event-based encodings have been tested as well. With event-based encodings, a sequence of local features are separated into different event targets and transitions to model an utterance. However, this method faces the challenge of properly defining events within the sequence. Thus, although many algorithms and methods exist to model a signal, most systems focus on working with mel-frequency cepstrum coefficents (MFCCs) and deltas/double deltas, as they are very standard in most speech synthesis and recogntion systems in general. The extraction process of MFCCs and deltas/double deltas are described in further detail in \autoref{technical-background}. 

After the chosen features are extracted, the features between the source speaker and target speaker have to be matched to prepare them for conversion. In parallel conversion, this means that each sound in an utterance has to be mapped between the speakers, which can be done manually but more often is done using an algorithm such as dynamic time warping (DTW). Although this is usually an effective algorithm to find the best alignment, there can be issues in aligning the sounds as it assumes that the same phonemes of the speakers have similar features \parencite{mohammadi2017}. This can be improved upon by adding phonetic transcription, or using methods such as forced alignment, but these methods may also have other limitations.

With non-parallel voice conversion, the alignment process becomes more complex as utterances from the source and target speakers have to be broken down into individual phonemes, and then the desired sounds must somehow be collected and synthesized to produce the converted speech. This can be done using methods like unit-selection text-to-speech (TTS), but this requires a large amount of annotated training data. Algorithms such as INCA can be used in addition to work without annotation by iteratively searching for the best frame pairs. Further information on the various alignment methods are detailed within \textcite{mohammadi2017}. 

When the best frames between the source and target speakers are finally matched, a method has be to chosen to map the relationship between the frames. This has traditionally been done by using Gaussian Mixture Models, although neural networks have also become prevalent as well as they become ubiquitous throughout computational modeling. A detailed but accessible explanation of these algorithms and how they function is provided in \autoref{technical-background}.

A visual representation that summarizes the voice conversion process can be seen in \autoref{fig:vc-flowchart}, courtesy of \textcite{mohammadi2017}.

\begin{figure}[H]
\centering
\includegraphics[scale=0.20]{img/vc-flowchart.png}
\caption{The training and conversion processes of a typical VC system.}
\label{fig:vc-flowchart}
\end{figure} 


# Accent conversion
Like voice conversion, accent conversion is dedicated to convert the speech of a *source speaker* into sounding like a *target speaker*. However, accent conversion is specifically focused on morphing the *accent* of the speech signal, as opposed to sounding directly like the target speaker. Succinctly stated, "Accent conversion seeks to transform second language L2 utterances to appear as if produced with a native (L1) accent," \parencite{aryal2014a}. Because the confusion that can arise from using the terminology *source speaker* and *target speaker*, the *source speaker* is often referred to as the native or L1 speaker, while the *target speaker* is referred to as the non-native or L2 speaker. This seems somewhat counter-intuitive, but this allows for us to create a voice that retains the non-native speaker's identity and the native speaker's accent \parencite{zhao2018a}.

Accent conversion poses a further challenge on top of (parallel) voice conversion as the audio of the source speaker and target speaker cannot simply be forced-aligned due to the fact that the voice quality and accent of the target speaker would remain \parencite{aryal2014}. This means that accent conversion may require more specialized alignment methods beyond standard frame-by-frame alignment that can help preserve the right speaker information while suppressing the other undesired information. This is further discussed in the examination of previous work in accent conversion in \autoref{accent-conversion}.


# Technical Background

\subsection{Mel-frequency cepstrum coefficients}
Following \textcite{jurafsky2009}, mel-frequency cepstrum coefficients (MFCCs) allow us to create vectorized representation of the acoustic information. 

This is done by going over the speech signal using _windows_, where each window is assumed to contain a non-changing part of the signal. In order words, each window would roughly contain one phone-- or speech sound. In order to retain all of the necessary information from each part of the signal, the windows often overlap. 

After the signal is separated into different windows, the spectral information can be extracted using a special tool or formula known as the Discrete Fourier Transform. This allows us to find how much energy is in specific frequency bands.

From here the frequencies outputted by the Discrete Fourier Transform are converted onto the _mel_ scale, which is where the _mel_ in Mel-frequency comes from. In short, the mel scale is used to represent human hearing, which is more sensitive to lower pitch sounds (under 1000hz) as compared to higher pitch sounds. 
Afterwards, the _cepstrum_ is calculated in order to separate source information from filter information. From a high level, the source-filter theory says that all sounds come from the glottis (the area around our throat) and below, which contains information common to all speech sounds, such as the fundamental frequency (or pitch) of someone's voice, as well as glottal pulse information. This is compared to the filter, which says that adjusting the vocal tract (e.g. moving the tongue and other articulators) define each individual sounds. By retaining just the filter information, we can model an individual phone. In terms of the given cepstral values, the first 12 cepstral values are taken as they neatly represent the filter information. 

Although this information alone could be used to model a speech signal, additional information is often added to further better model each frame. Among this information is energy, which can help us further distinguish a sound, as vowels and sibilants ('breathy' sounds like /s/ or /f/) have more energy compared to stops ('hard' sounds like /k/ or /p/). On top of the 12 MFCC features and 1 energy feature, features known as deltas and double deltas are often added to represent the change in the speech signal frame to frame. Concretely, deltas can be used to model changes in formants or a change from stop closure to stop release. Double deltas are then added to represent the changes between deltas, which provide further precision in modeling an utterance. In total, this gives us 39 MFCC features from:

\begin{itemize}
   \setlength\itemsep{-1em}
   \item{\textbf{12} cepstral coefficients}
   \item{\textbf{12} delta cepstral coefficients}
   \item{\textbf{12} double delta cepstral coefficients}
   \item{\textbf{1} energy coefficient}
   \item{\textbf{1} delta energy coefficient}
   \item{\textbf{1} double delta energy coefficient}
\end{itemize}

A visual representation of the whole MFCC extraction process can be seen in \autoref{fig:vc-flowchart}, taken from \textcite{jurafsky2009}.

\begin{figure}[H]
\centering
\includegraphics[scale=0.22]{img/mfcc-extraction.png}
\caption{The extraction of sequence 39-dimensional MFCC vectors from a waveform.}
\label{fig:vc-flowchart}
\end{figure} 

\subsection{Gaussian mixture models}
A Gaussian mixture model is a type of probablistic model that aims to represent normally distributed groups within a set. This is based on the idea of the normal, or *Gaussian* distribution, which can be see in \autoref{fig:gaussian-dist}. \colorbox{magenta}{[Create new graph from scratch or cite it.]} The Gaussian distribution is characterized by two main features: the mean (the arithmetic average of the data) and the variance (the spread of the data from the mean). The Gaussian distribution is the most important distribution used in probablistic modelling as it has been theorized that the average of independent random variables would look like a normal distribution \parencite{mcgonagle2016}.

\begin{figure}[H]
\centering
\includegraphics[scale=0.30]{img/gaussian-dist.png}
\caption{The Gaussian distribution with different means (\( \mu \)) and variances (\( \sigma^2 \)).}
\label{fig:gaussian-dist}
\end{figure} 

Gaussian mixture models are based on the principle that if a unimodal (one 'peak') dataset can be fit with a Gaussian distribution, then a multimodal (multi 'peak') dataset is just a 'mixture' of smaller Gaussian distributions. A common example given to understand the Gaussian distribution and Gaussian mixture models often references height. It is often said that men are taller than women on average, with men being 178cm (5 foot 10 inches), and women being 165cm (5 foot 5 inches). If we used two separate Gaussians to model each gender, we could 'mix' them to model the likelihood of a certain data point (e.g. person) being a male or a female \parencite{mcgonagle2016}. For example, using a hypothetical example with the averages previously mentioned, we could see that the likelihood of a person that is 168cm is more likely to be a male than a female. This is demonstrated in \autoref{fig:gmm-height}. \colorbox{magenta}{[Create new graph from scratch or cite it.]}

\begin{figure}[H]
\centering
\includegraphics[scale=0.20]{img/gmm-height.png}
\caption{An example of a GMM using male and female height. The likelihoods for each gender for someone 168cm (66in) tall is calculated using the percentage of men and women in the dataset from the vertical axis. The probabilities are given in the top right corner.} 
\label{fig:gmm-height}
\end{figure} 


However, as simple as this sounds the most advantageous point of the Gaussian mixture model is the fact that it is an _unsupervised_ model that can be used when the subpopulations of the data are unknown. Thus, following the previous example of height, a Gaussian mixture model could be used to model the height of the two genders _without_ knowing the gender of each datapoint.

Because it is an _unsupervised_ model, it requires a special method to estimate the appropriate parameters. The most common method used for this is known as _expectation maximization_. This algorithm is used for maximum likelihood estimation. In other words, this algorithm tries to find the most appropriate group for each datapoint by calculating the probability of it being in a certain group and selecting the most likely one. This is done iteratively by initializing reasonable values, and then calculating the probability of membership in each cluster (the _expectation_ step) and updating each clusters location, normalization and shape using the probabilities calculated (the _maximization_ step) until the algorithms converge \parencite{vanderplas2016}. A visual example of the convergence process taken from \textcite{mcgonagle2016} can be seen in \autoref{fig:em-converge}.

\begin{figure}
   \centering
   \begin{subfigure}[b]{0.3\textwidth}
      \includegraphics[width=\textwidth]{img/em-alg2.jpg}
         \caption{Initizalization}
         \label{fig:gmm-init}
   \end{subfigure}
   \quad
   \begin{subfigure}[b]{0.3\textwidth}
      \includegraphics[width=\textwidth]{img/em-alg3.jpg}
         \caption{Mid-convergence}
         \label{fig:gmm-mid}
   \end{subfigure}
   \quad
   \begin{subfigure}[b]{0.3\textwidth}
      \includegraphics[width=\textwidth]{img/em-alg4.jpg}
         \caption{Converged}
         \label{fig:gmm-conv}
   \end{subfigure}
   \quad
   \caption{Gaussian Mixture Model convergence using the Expectation-Maximization algorithm}\label{fig:em-converge}
\end{figure}

This model can be compared to the _k_-means clustering algorithm, as both can be used to cluster different subgroups. Like the _k_-means algorithm, GMMs also require us to specify a number of components, which usually indicate the number of subgroups we hope to cluster. However, _k_-means suffers from not using a probablistic model to assign clusters, which means that data points can only be assigned to exactly one cluster. The cluster shape of _k_-means is also limited to only circles, which makes it inadequate to model data with different distributions. GMMs manage to address these issues by using the expectation-maximization algorithm to calculate the probabilities of cluster assignment and by allowing for different covariance types which permits for different cluster shapes beyond the circle. Aside from being useful as an unsupervised classification algorithm, GMMs can also be seen as a generative algorithm as it models the overall distribution of the data \parencite{mcgonagle2016}. This means that a GMM can be used to generate new data points following the distribution of the given data set. 

In the case of speech, Gaussian mixture models are most often used to model individual sounds using MFCC feature vectors. Because MFCC feature vectors are multi-dimensional (\begin{math} \sim \end{math}39-dimensions), the Gaussians within the model are also multi-variate. However, the same principles described above still stand, and allow us to calculate the probability of a sound from a given frame. 


Although GMMs are useful for modeling the distribution of sounds within a dataset and allow us to generate any observation, they are only capable of modeling speech as discrete MFCC vectors as opposed to a continuous sequence. Thus, GMMs are often utilized with Hidden Markov Models to remedy this issue. In short, Hidden Markov Models are models that consist of _states_ and _transitions_. When utilized in speech recognition, each state represents a potential sound, while the transitions represents the probability or likelihood of the next state (e.g. sound). Gaussian mixture models can be used to represent a sound within a state \colorbox{magenta}{[check from here; this also needs a diagram]}. 


\subsection{Neural networks}
\colorbox{magenta}{[Continue this part]}

\subsection{I-vectors}
Identity vectors, or _i-vectors_ are used as a method to model both the intra-domain and inter-domain variables of speech signals in the same low dimensional space. They are considered one of the more modern methods in speech recognition, compared to the more classic Gaussian mixture models and its modification, Gaussian Mixture Models with universal background model (GMM-UBM), and joint factor analysis. In fact, i-vectors stem from a modification of the joint factor anaylsis method which is explained as the following.

\colorbox{magenta}{[Continue this part]}

