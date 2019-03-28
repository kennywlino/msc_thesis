\cleardoublepage
\chapter{Design and methodology}
 
In this chapter, we introduce the dataset and tools utilized in the experiments, and detail the procedures carried out to conduct the accent conversion process. We also go over the evaluation criteria for accent conversion systems following standards set forth by by previous work \textcite{aryal2014, mohammadi2017, zhao2018a}.

# Data
The main datasets utilized in the following experiments are the Carnegie Mellon University (CMU) ARCTIC corpus \parencite{kominek2004}, the L2-ARCTIC corpus \parencite{zhao2018}, a non-native English counterpart to the CMU Arctic corpus and the Accents of the British Isles (ABI) corpus \parencite{darcy2004}.

## CMU ARCTIC corpus
The CMU ARCTIC corpus is an older corpus that originates from sometime in 2004, following the publication date of the corpus' description. It was was originally designed to have good phonetic (specifically diphone) coverage for speech synthesis and aimed to be cleanly recorded and matched the intended domains. The corpus itself contains roughly 1200 read utterances per speaker taken from Project Gutenburg, which contains a number of modern short stories and novels.  The corpus is distributed with 16KHz waveforms with full phonetic labeling and simultaneous EGG signals.

The CMU ARCTIC corpus contains 4 US English speakers, with speakers _bdl_ and _slt_ being experienced voice talents. It also comes with 14 other speakers with varying accents, including Canadian, Scottish, and Indian. A full list of the speakers and their speaker IDs can be seen in \autoref{table:cmu-arctic-speakers}.

\begin{table}[]
\centering
\begin{tabular}{|l|l|l|}
\hline
\textbf{Accent} & \textbf{Sex} & \textbf{Speaker ID} \\ \hline
US              & male         & aew                 \\ \hline
US              & male         & bdl                 \\ \hline
US              & female       & clb                 \\ \hline
US              & female       & eey                 \\ \hline
US              & female       & ljm                 \\ \hline
US              & female       & lnh                 \\ \hline
US              & male         & rms                 \\ \hline
US              & female       & slt                 \\ \hline
Scottish        & male         & awb                 \\ \hline
Irish           & male         & fem                 \\ \hline
Indian          & male         & aub                 \\ \hline
Indian          & female       & axb                 \\ \hline
Indian          & male         & gka                 \\ \hline
Indian          & male         & ksp                 \\ \hline
Indian          & female       & slp                 \\ \hline
German          & male         & ahw                 \\ \hline
Dutch           & male         & rxr                 \\ \hline
Candian         & male         & jmk                 \\ \hline
\end{tabular}
\caption{A complete list of the ARCTIC speakers, their accents and speaker IDs.}
\label{table:cmu-arctic-speakers}
\end{table}


## L2-ARCTIC corpus
The L2-ARCTIC corpus was recently curated by researchers as a joint collaboration between the Texas A&M University and Iowa State University with the intention of distributing the corpus for research in voice conversion, accent conversion and mispronunciation detection. At the time of writing, the L2-ARCTIC corpus contains 20 non-native speakers of Hindi, Korean, Mandarin, Spanish and Arabic, with a male and female speaker for each language, but the researchers have indicated that there may be other speakers in the future. 

The original audio was sampled at 44.1 kHz, with each recording at roughly 3.7 seconds on average. In total, the duration of the corpus is 11.2 hours, with each speaker recording an average of 67 minutes of audio, or the complete ARCTIC sentence prompt list of 1,132 utterances. However, some speakers did not read all of the sentences and some recordings were removed as they did not have appropriate quality.

In addition to the audio files, the corpus also includes word and phoneme-level transcriptions and manually annotated errors for a 150-sentence subset of the corpus, designed to be used in computer-assisted pronunciation training tools. Within the subset, there are 100 sentences uttered by all speakers, and 50 sentences that contain phonemes that are considered to be difficult based on a speaker's L1. This also includes phone addition, phone substitution, and phone deletion annotations in ARPAbet format, as well as optional comments left by the annotators. 

## Accents of the British Isles (ABI) corpus

The ABI corpus was originally designed and collected to support efforts in systematic studies of the relationship between various accents in the British Isles and speech technology. At the time of its creation, there was no appropriate corpus that existed that could be used for this type of research. One of the largest obstacles in designing a succinct corpus to capture the varieties of accents across the British Isles was deciding how to define accent. As mentioned in the introduction to this work, the authors had difficulties finding suitable subjects as some people associated their accent not only with their geographic region but also their own social backgrounds. 

Nonetheless, the authors of the corpus chose to define 14 regions known for their associated accents and selected towns or cities that were representative of each accent. At each location, 20 people were recorded, for a total of 10 female and 10 male. The creators of the corpus also mandated that the subjects needed to be born and have lived in that location all of their lives.

The corpus contains a variety of utterances, including word lists to contrast the different vowels across accents (e.g. 'heed', 'had', 'hide', etc. ), short phrases such as 'roll of wire' or 'thin as a wafer', and long phrases that are cut up from the readings of short 'accent diagnostic' stories. The audio was recorded at a sample rate of 22.5KHz per second with 16 bit resolution.  

The accents contained in the ABI corpus can be seen in \autoref{abi-corpus-chart}:

\begin{table}[]
\centering
\begin{tabular}{|l|l|l|}
\hline
\textbf{Region} & \textbf{Towns/Cities} & \textbf{Code} \\ \hline
Standard Southern English & n/a & sse \\ \hline
Midlands & Birmingham & brm \\ \hline
Wales & Denbeigh & nwa \\ \hline
Scottish Highlands & Elgin & shl \\ \hline
Republic of Ireland & Dublin & roi \\ \hline
East Yorkshire & Hull & eyk \\ \hline
Lancashire & Burnley & lan \\ \hline
Ulster & Belfast & uls \\ \hline
NE England & Newcastle & ncl \\ \hline
Scotland & Glasgow & gla \\ \hline
Inner London & n/a & ilo \\ \hline
NW England & Liverpool & lvp \\ \hline
East Anglia & Lowestoft & ean \\ \hline
West Country & Truro & crn \\ \hline
\end{tabular}
\caption{The regions of the British Isles and their corresponding cities where the ABI corpus was recorded, as well as their corresponding codes in the corpus.}
\label{abi-corpus-chart}
\end{table}

## Experimental data set-up

Using the corpora described above,we split them into two sets of experiments, with the ARCTIC corpora used in one set of experiments and the ABI corpus used in another set of experiments.

# Experiments

## CMU ARCTIC Corpus

As discussed in the introduction of this work, accent conversion has been proposed as better-suited feedback mechanism for accent training systems. These two corpora are specifically used to test how effective accent conversion is on minimizing the effects of non-native speech.

Following \textcite{zhao2018a} who also works with the ARCTIC corpora, only 150 parallel utterances or roughly 9 minutes of data, following the L2-ARCTIC average are utilized, with the utterances from the L2-ARCTIC corpus downsampled to 16 kHz to match the quality of the CMU ARCTIC corpus. During the selection of the 150 utterances, any phrases not recorded by _all_ of the speakers chosen for the experiments were not considered in order to maintain the parallelness of the experiments. The data used in this experiment was also text-independent as the CMU ARCTIC corpus does not contain labeled utterances. Out of the 150 utterances, 100 were randomly chosen as training utterances while the other 50 were used test utterances.

Although the sample size is very small compared to the actual size of the corpora, a small sample is chosen to acknowledge the fact that often only a little amount of data is available or acquirable in building these systems. This is done similarly in the Voice Conversion Challenge 2018 as well \cite{lorenzo-trueba2018}. 

The speakers utilized in the experiments are also limited to speakers BDL (male) and CLB (female) from the CMU ARCTIC database, who are the native reference speakers, while the non-native speakers chosen from the L2-ARCTIC corpus are the native Korean speakers (HKK, male; YDCK, female), Hindi speakers (RRBI, male; TNI, female), and Spanish speakers (EBVS, male; NJS, female). This is mostly similar to the datasets in \textcite{zhao2018a}, with the exception of the Korean female speaker (YDCK) in place of the male Korean speaker (YKWK), which is not included in the current release (at the time of writing) of the L2-ARCTIC corpus, and the replacement of the native male Arabic speaker (ABA) with the two native Spanish speakers. 

## ABI Corpus
Accent conversion systems have also been mentioned as a possible solution to challenges that current speech recognition systems may have. However, the few accent conversion studies \parencite{aryal2014, aryal2014a, aryal2015, zhao2018a} conducted by those from the Texas A&M research group have focused on accent conversion between non-native and native speakers, and voice conversion studies such as the Voice Conversion Challenge 2016 and 2018 \parencite{toda2016, lorenzo-trueba2018} have mainly investigated conversions between US speakers. Thus, in order to see the effects of accent conversion between native speakers and to include other varieties of English, the ABI corpus was chosen.

Although the ABI Corpus contains a total of 14 accents, only 4 accents were selected, with the Southern Standard English (SSE) accent used as the source accent (the 'native' accent) and the East Anglia (EAN), Glasgow (GLA), Lancashire (LAN) used as the target accent (the 'non-native' accent) to match the structure of the CMU ARCTIC corpus experiments. These accents were chosen based on their dissimilarity from the Southern Standard English accent. Although phonological and other linguistic information could have been used to quantitatively measure the level of dissimilarity between the accents, we measured the level of dissimilarity following the word error rate of using an ASR system for each accent in the ABI corpus as seen in \textcite{najafian2014}. After organizing the word error rate for each accent from high to low, the Glasgow, Lancashire, and East Anglia accents were repsectively chosen for having the worst word error rate, to being in the middle, and being fairly close to Standard Southern English.

The ABI Corpus had more coverage in terms of the number of speakers available per accent and gender, as well as variation in the recording environment and quality. Concretely, some speakers were much more quieter than others, while others spoke at a much more rapid pace than others, or enunciated much less than others. Thus, during the speaker selection process, we manually listened to a sample of each speaker, either from the 'shortphrases' or 'shortsentences' folder, and chose based on these criteria. Some of the chosen speakers had recorded some of the same words and/or phrases, mostly due to production errors such as stumbling or reading the wrong word. In the case that a chosen speaker had repeated recordings,we removed the malformed recordings in order to keep the experimental corpus as parallel as possible. The utterances were also not labeled, making this experiment also text-independent.

The experiments for the ABI corpus are set up similarly to the ARCTIC experiments in terms of the proportion of training and test set utterances. However, unlike the ARCTIC corpus, the total amount of data available for the ABI corpus was roughly 5 minutes per speaker.  Because the ABI corpus also contains a mixture of word lists and phrases/sentences, this made it more difficult to randomize all of the audio into separate training and test sets. Thus, in order to maintain a similar proportion of audio like the ARCTIC experiments, we chose to use all of the word lists as the training set and the phrases and sentences as a test set. Utilizing the phrases and sentences as a test set also made more logical sense as this allowed for better comparison to the ARCTIC results and because converting the accents for a single word appeared to be more trivial in both usage and evaluation.


# Tools and set-up

In order to understand more traditional mapping methods used in voice and accent conversion, we follow the Gaussian mixture model method described in \textcite{toda2007} for voice conversion by reimplementing the method described in \textcite{aryal2014} which utilized frame matching based on acoustic similarity. In reimplementing the methodology of \textcite{aryal2014}, we checked for the optimal number of components for the Gaussian mixture model. We tested a variety of set-ups from 64, 128, and 256 components and found that like \textcite{aryal2014}, a GMM of 128 mixture components sounded best. We also represented each utterance as a sequence of 24 MFCCs with deltas.  

In reimplementing \textcite{aryal2014}, certain features were removed-- namely vocal length tract normalization and prosody modification. Although it is discussed that vocal tract length normalization allows for better frame matching, it was assumed that converting audio between speakers of the same gender would have less impact from differences in vocal tract length. Inspection of preliminary conversion audio without these features compared to conversion with these features as offered by \textcite{zhao2018a} also suggested little to no impact.  

In order to conduct the experiments, we utilize a 2013 Macbook Pro and Python version 3.6.6 alongside Jupyter Lab to manage all of the experiments, calculate the results and generate graphics. 

For the experiments, we utilize the \texttt{nnmnwkii}\footnote{Found at: https://github.com/r9y9/nnmnkwii} Python package which provides fast and easy functions to train voice conversion systems conveniently based on \textcite{toda2007}. Alongside this package, we also utilize a number of other packages that \texttt{nnmnkwii} is dependent on, including \texttt{pysptk}, a Python wrapper for the Speech Processing Toolkit, \texttt{pyworld}, a Python wrapper for WORLD, a well-known tool for high-quality speech analysis and acoustic feature extraction, \texttt{librosa}, another package for audio analysis, and the common \texttt{scikit-learn} machine learning package for GMM training. In addition, we use a custom method written to find the most acoustically similar for each frame and convert the corresponding frames instead of the frames matched using dynamic time warping. This was done just as in \textcite{aryal2014} by clustering the source and target frames into 512 clusters using the k-means algorithm and then finding the most acoustically similar target frame for each frame in the source utterance and vice versa.

In order to calculate the results of the experiments discussed in \autoref{results}, we utilize the \texttt{pandas} package to manage the data from the survey and calculate statistical measures such as t-test and z-test using the standard \texttt{scipy} package. Graphics are generated using the \texttt{bokeh} package generated using the \texttt{holoviews} wrapper package.

The specific versions of the key packages used in the experiment and result calculating process can be seen in \autoref{table:py-packages}.

\begin{table}[]
\centering
\begin{tabular}{|l|r|}
\hline
\textbf{Package} & \textbf{Version} \\ \hline
\texttt{bokeh}            & 1.0.3            \\ \hline
\texttt{holoviews}        & 1.11.0           \\ \hline
\texttt{jupyterlab}      & 0.35.4           \\ \hline
\texttt{librosa}          & 0.6.2            \\ \hline
\texttt{nnmnkwii}         & 0.0.17           \\ \hline
\texttt{numpy}         & 1.15.4           \\ \hline
\texttt{pandas}           & 0.23.4           \\ \hline
\texttt{pysptk}          & 0.1.14           \\ \hline
\texttt{scikit-learn}     & 0.20.2           \\ \hline
\end{tabular}
\caption{A list of the core packages and their versions used in this work.}
\label{table:py-packages}
\end{table}


# Evaluation

Voice conversion and accent conversion systems can be evaluated using either: a) objective measures or b) subjective measures. With objective measures, evaluation can be challenging as it often requires intricate formulas that do not necessarily extrapolate across datasets or even individual audios \parencite{felps2010}. With subjective methods, it is often simpler as evaluation can be conducted by simply gathering participants and asking them to rate certain criteria. 

In both cases, accent conversion systems are often evaluated on three features: the acoustic quality, speaker identity, and accentedness of each converted audio. With acoustic quality, the goal is to ensure that the audio does not deteriorate from the original and source audios, while speaker identity aims to ensure that the target speaker still sounds like themselves and not the source speaker. Accentedness is the most straightforward measure of the three, as accentedness aims to measure how much the accent of a target speaker is reduced or to measure how similar the accent of the converted audio is to the source speaker. 

In the case of the experiments here, we choose to evaluate using a perceptual study due its reliability and because of the complexity of using objective measures. we adapt the method utilized in \textcite{zhao2018a}, which in turn was adapted from \textcite{aryal2014}, another previous work from the same research group. Specifically, we gather a group of 36 listeners to listen to 40 test samples with 20 taken from the experiment done with the ARCTIC corpus and 20 taken from the ABI corpus. 10 test samples are used for each evaluation criteria. The participants include a number of students that are a part of the Erasmus Mundus Language and Communication Technology Master's, as well as some local students from the University of the Basque Country, the University of Malta and other acquaintances of the author. The survey was also posted on Reddit under the /r/SampleSize subreddit and distributed by some participants recruited directly by the author to other acquaintances of the participants.

The number of listeners were decided by recruiting roughly 40 people with the anticipation of collecting enough results so that each speaker in both sets of corpora would be evaluated by at least 5 listeners. At the close of the survey, only the female East Anglia speaker (EAN F) from the ABI experiments and the female Korean speaker from the ARCTIC experiments had less than 5 evaluators, at a total of 4 and 3 respectively. The distribution of evaluators per speaker in the ARCTIC experiments and the ABI experiments can be seen in \autoref{fig:participants-dist}. This graph is organized so that the colors shown in the key represent the selected speaker from either the L2-ARCTIC corpus (e.g. blue for the East Anglian male speaker) or the ABI corpus (e.g. blue for the Hindi female speaker). The 36 speakers are then divided into their appropriate groups per experiment to represent how many participants evaluated each speaker. For example, there were 6 participants who evaluated the GLA F speaker in the ABI experiment as this part of the graph ranges from 16 - 22.

\begin{figure}[]
   \centering
   \begin{subfigure}[b]{1\textwidth}
      \includegraphics[width=1\textwidth]{img/abi_participant_dist.png}
         \caption{ABI experiment}
         \label{fig:abi-participant-dist-graphics}
   \end{subfigure}
   \quad
   \begin{subfigure}[b]{1\textwidth}
      \includegraphics[width=1\textwidth]{img/arc_participant_dist.png}
         \caption{ARCTIC experiment}
         \label{fig:arc-participant-dist-graphics}
   \end{subfigure} 
   \quad
   \caption{The distribution of speakers in each experiment.}
   \label{fig:participants-dist}
\end{figure}

The survey was uploaded on to Google Forms, with the audios embedded on a separate page found on a GitHub Page associated with the GitHub repository for this work. All listeners were asked to evaluate 1 speaker from the CMU ARCTIC experiments and 1 speaker from the ABI experiments using headphones/earphones. The speakers that each evaluator assessed were decided upon randomly using the 'shuffle option order' embedded in Google Forms. The audios embedded on the GitHub page were in PCM signed 16-bit .wav format, which were converted from the original audio files outputted by the accent conversion system. The original audios were converted using the command line interface of \texttt{ffmpeg} version 4.0.2 in order to better support in-browser playback as the original .wav format was not compatible with current HTML5 standards.

The participants in the survey were first asked to evaluate ten (10) converted audios on their perceived accent similarity using an ABX format to decide whether audio X is more similar to audio A or audio B. Audio A and audio B were randomly distributed to be either the source speaker or the target speaker, and Audio X was the converted audio. The aim of this experiment was to observe whether the participants would evaluate the converted audio (audio X) as sounding most similar to the desired audio in terms of accent.


After this task, the participants were then asked to evaluate the speaker identity of the converted audios on a voice similarity score ranging from -7 representing 'definitely different speakers' to +7 representing 'definitely same speaker'. This was done by asking the participants to listen to ten (10) pairs of audio files and ask them to evaluate each pair on this scale. Out of the ten pairs, five pairs were chosen to be the same speaker and five pairs were chosen to be different speakers. In order to cut down on the amount of time needed to complete the survey, the participants were not asked to assess the acoustic quality, as the acoustic quality was the most likely to be stable across audios and corpora. A complete reduplication of the survey can be found in \autoref{annex-1-evaluation-survey}.

In terms of demographic information, they were asked to indicate whether or not they consider themselves native speakers of English to observe whether or not there are any particular differences between the two populations in their evaluations on accent conversion. Beyond this, all other participant information was anonymized as no other information was collected.

A visual summarization of the perceived accent task and speaker identity task can be seen in \autoref{fig:eval-questions-chart}. 

\begin{figure}[]
   \centering
   \begin{subfigure}[b]{0.4\textwidth}
      \includegraphics[width=1\textwidth]{img/pa-chart.png}
         \caption{Perceived Accent task}
         \label{fig:pa-chart}
   \end{subfigure}
   \quad
   \begin{subfigure}[b]{0.4\textwidth}
      \includegraphics[width=1\textwidth]{img/si-chart.png}
         \caption{Speaker Identity task}
         \label{fig:si-chart}
   \end{subfigure} 
   \quad
   \caption{The structure of the evaluation questions.}
   \label{fig:eval-questions-chart}
\end{figure}

