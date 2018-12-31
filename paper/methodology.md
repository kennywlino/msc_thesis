\cleardoublepage
\chapter{Design and methodology}

In this chapter, I introduce the dataset and tools utilized in the experiments, and detail the procedures carried out to conduct the accent conversion process.

\colorbox{magenta}{Expand this section}

# Data
The main datasets utilized in the following experiments are the Carnegie Mellon University (CMU) ARCTIC corpus \parencite{kominek2004}, the L2-ARCTIC corpus \parencite{zhao2018}, a non-native English counterpart to the CMU Arctic corpus and the Accents of the British Isles (ABI) corpus. \colorbox{magenta}{cite this!}  


## CMU ARCTIC corpus
The CMU ARCTIC corpus was originally designed to have good phonetic (specifically diphone) coverage for speech synthesis. \colorbox{magenta}{Expand this section}

## L2-ARCTIC corpus
The L2-ARCTIC corpus currently contains 10 non-native speakers of Hindi, Korean, Mandarin, Spanish and Arabic, with a male and female speaker for each language. At the time of writing, the curators of the corpus are working to add an additional 10 speakers to the corpus by September 2018.  

The original audio was sampled at 44.1 kHz, with each recording at roughly 3.7 seconds on average. In total, the duration of the corpus is 11.2 hours, with each speaker recording an average of 67 minutes of audio, or the complete ARCTIC sentence prompt list of 1,132 utterances. However, some speakers did not read all of the sentences and some recordings were removed as they did not have appropriate quality.

In addition to the audio files, the corpus also includes word and phoneme-level transcriptions and manually annotated errors for a 150-sentence subset of the corpus, designed to be used in computer-assisted pronunciation training tools. Within the subset, there are 100 sentences uttered by all speakers, and 50 sentences that contain phonemes that are considered to be difficult based on a speaker's L1. This also includes phone addition, phone substitution, and phone deletion annotations in ARPAbet format, as well as optional comments left by the annotators. 

## Accents of the British Isles (ABI) corpus

The ABI corpus was originally designed and collected to support efforts in systematic studies of the relationship between various accents in the British Isles and speech technology. At the time of its creation, there was no appropriate corpus that existed that could be used for this type of research.

In order to circumvent defining accent, the authors of the corpus instead chose 14 regions known for their associated accents.

The accents contained in the ABI corpus can be seen in \autoref{abi-corpus-chart}:

\begin{table}[H]
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

Using the corpora described above, I split them into two sets of experiments, with the ARCTIC corpora used in one set of experiments and the ABI corpus used in another set of experiments.

Following \textcite{zhao2018a} who also works with the ARCTIC corpora, only 150 utterances or roughly \colorbox{magenta}{[9 minutes of data] following the L2-ARCTIC average} are utilized, with the utterances from the L2-ARCTIC corpus downsampled to 16 kHz to match the quality of the CMU ARCTIC corpus. 

Although the sample size is very small compared to the actual size of the corpora, a small sample is chosen to acknowledge the fact that often only a little amount of data is available or acquirable in building these systems. This is done similarly in the Voice Conversion Challenge 2018 as well \cite{lorenzo-trueba2018}. The 150 utterances that are used are chosen at random, but are ensured to be 150 utterances that all speakers have recorded. Out of these 150 utterances, 100 are randomly chosen as training utterances while the other 50 are used test utterances.

# Experiments

## CMU ARCTIC Corpus

As discussed in the introduction of this work, accent conversion has been proposed as better-suited feedback mechanism for accent training systems.

The speakers utilized in the experiments are also limited to speakers BDL (male) and CLB (female) from the CMU ARCTIC database, who are the native reference speakers, while the non-native speakers chosen from the L2-ARCTIC corpus are the native Korean speakers (HKK, male; YDCK, female), Hindi speakers (RRBI, male; TNI, female), and Spanish speakers (EBVS, male; NJS, female). This is mostly similar to the datasets in \textcite{zhao2018a}, with the exception of the Korean female speaker (YDCK) in place of the male Korean speaker (YKWK), which is not included in the current release (at the time of writing) of the L2-ARCTIC corpus, and the replacement of the native male Arabic speaker (ABA) with the two native Spanish speakers. 

## ABI Corpus
Accent conversion systems have also been mentioned as a possible solution to challenges that current speech recognition systems may have. However, the few accent conversion studies conducted by those from the Texas A&M research group have focused on accent conversion between non-native and native speakers, and voice conversion studies such as the Voice Conversion Challenge 2016 and 2018 have investigated conversions between US speakers. Thus, in order to see the effects of accent conversion between native speakers and to include other varieties of English, the ABI corpus was chosen.

The experiments for the ABI corpus are set up similarly to the ARCTIC experiments in terms of the proportion of training and test set utterances. However, unlike the ARCTIC corpus, the total amount of data available for the ABI corpus was less

Because the ABI corpus contains a large number of accents and speakers, I chose one accent as the source accent for all conversions, and three separate accents as the target accents. Specifically, I chose the Standard Southern English accent as the source accent as it   


## Tools and set-up

In order to understand more traditional mapping methods used in voice and accent conversion, I follow the methods described in \colorbox{magenta}{[something about Toda (2007)]} for voice conversion and reimplement the method described in \textcite{aryal2014} which utilized frame matching based on acoustic similarity. 

In reimplementing \textcite{aryal2014}, certain features were removed-- namely vocal length tract normalization and prosody modification. Although it is discussed that vocal tract length normalization allows for better frame matching, it was assumed that converting audio between speakers of the same gender would have less impact from differences in vocal tract length. Inspection of preliminary conversion audio without these features compared to conversion with these features as offered by \textcite{zhao2018a} also suggested little to no impact.  

In order to do GMM-based accent conversion, I utilize the \texttt{nnmnwkii}\footnote{Found at: https://github.com/r9y9/nnmnkwii} Python package which provides fast and easy functions to train voice conversion systems conveniently based on \colorbox{magenta}{[Toda(2007]}. Alongside this package, I also utilize a number of other packages that \texttt{nnmnkwii} is dependent on, including \texttt{pysptk}, a Python wrapper for the Speech Processing Toolkit, \texttt{pyworld}, a Python wrapper for WORLD, a well-known tool for high-quality speech analysis and acoustic feature extraction, \texttt{librosa}, another package for audio analysis, and the common \texttt{scikit-learn} machine learning package for GMM training. In addition, I use a custom method written to find the most acoustically similar for each frame and convert the corresponding the frames instead of frames that are matched using dynamic time warping. \colorbox{magenta}[Include the various versions of Python and the packages]

