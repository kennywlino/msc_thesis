\cleardoublepage
\chapter{Design and methodology}

In this chapter, I introduce the dataset and tools utilized in the experiments, and detail the procedures carried out to conduct the accent conversion process.

\colorbox{magenta}{Expand this section}

# Data
The main datasets utilized in the following experiments is the Carnegie Mellon University (CMU) ARCTIC corpus \parencite{kominek2004} and the L2-ARCTIC corpus \parencite{zhao2018}, a non-native English counterpart to the CMU Arctic corpus. 


## CMU ARCTIC corpus
The CMU ARCTIC corpus was originally designed to have good phonetic (specifically diphone) coverage for speech synthesis.



## L2-ARCTIC corpus
The L2-ARCTIC corpus currently contains 10 non-native speakers of Hindi, Korean, Mandarin, Spanish and Arabic, with a male and female speaker for each language. At the time of writing, the curators of the corpus are working to add an additional 10 speakers to the corpus by September 2018.  

The original audio was sampled at 44.1 kHz, with each recording at roughly 3.7 seconds on average. In total, the duration of the corpus is 11.2 hours, with each speaker recording an average of 67 minutes of audio, or the complete ARCTIC sentence prompt list of 1,132 utterances. However, some speakers did not read all of the sentences and some recordings were removed as they did not have appropriate quality.

In addition to the audio files, the corpus also includes word and phoneme-level transcriptions and manually annotated errors for a 150-sentence subset of the corpus, designed to be used in computer-assisted pronunciation training tools. Within the subset, there are 100 sentences uttered by all speakers, and 50 sentences that contain phonemes that are considered to be difficult based on a speaker's L1. This also includes phone addition, phone substitution, and phone deletion annotations in ARPAbet format, as well as optional comments left by the annotators. 

## Experimental data set-up

In the context of the experiments described below, following \textcite{zhao2018a} only 150 utterances are utilized, with the utterances from the L2-ARCTIC corpus downsampled to 16 kHz to match the quality of the CMU ARCTIC corpus. Although the sample size is very small compared to the actual size of the corpora, a small sample is chosen to acknowledge the often little amount of data that is available/acquirable in building these systems. The 150 utterances that are used are chosen at random, but are ensured to be 150 utterances that all speakers have recorded. Out of these 150 utterances, 100 are randomly chosen as training utterances while the other 50 are used test utterances.

The speakers utilized in the experiments are also limited to speakers BDL (male) and CLB (female) from the CMU ARCTIC database, who are the native reference speakers, while the non-native speakers chosen from the L2-ARCTIC corpus are the native Korean speakers (HKK, male; YDCK, female), Hindi speakers (RRBI, male; TNI, female), and Spanish speakers (EBVS, male; NJS, female). This is mostly similar to the datasets in \textcite{zhao2018a}, with the exception of the Korean female speaker (YDCK) in place of the male Korean speaker (YKWK), which is not included in the current release of the L2-ARCTIC corpus, and the replacement of the native male Arabic speaker (ABA) with the two native Spanish speakers. 

# Baselines: GMM-based voice and accent conversion
In order to understand more traditional mapping methods used in voice and accent conversion, I follow the methods described in \colorbox{magenta}{[something about Toda (2007)]} for voice conversion and reimplement the method described in \textcite{aryal2014} which utilized frame matching based on acoustic similarity. Each serves as a baseline to be compared to the proposed experiment described in the next subsection. \colorbox{magenta}{[put link to subsection here.]}

In reimplementing \textcite{aryal2014}, certain features were removed-- namely vocal length tract normalization and prosody modification. Although it is discussed that vocal tract length normalization allows for better frame matching, it was assumed that converting audio between speakers of the same gender would have less impact from differences in vocal tract length. Inspection of preliminary conversion audio without these features compared to conversion with these features as offered by \textcite{zhao2018a} also suggested little to no impact.  


## Tools
In order to do GMM-based voice conversion, I utilize the \texttt{nnmnwkii}\footnote{Found at: https://github.com/r9y9/nnmnkwii} Python package which provides fast and easy functions to train voice conversion systems conveniently based on \colorbox{magenta}{[Toda(2007]}. Alongside this package, I also utilize a number of other packages that \texttt{nnmnkwii} is dependent on, including \texttt{pysptk}, a Python wrapper for the Speech Processing Toolkit, \texttt{pyworld}, a Python wrapper for WORLD, a well-known tool for high-quality speech analysis and acoustic feature extraction, \texttt{librosa}, another package for audio analysis, and the common \texttt{scikit-learn} machine learning package for GMM training.

For GMM-based accent conversion, I also make use of the \texttt{nnmnwkii} package and its dependencies, but in addition, I use a custom method written to find the most acoustically similar for each frame and convert the corresponding the frames instead of frames that are matched using dynamic time warping. 

# Experiment 2: I-vector based accent conversion
This experiment is motivated by the works presented in \textcite{wu2016} and \textcite{kinnunen2017} and should be considered the main experiment of this work.  Due to their flexible nature, i-vectors are an appropriate method to capture the representation of an accent in a compact way. 

## Tools
In order to do the i-vector based accent conversion, I first utilized the \texttt{SIDEKIT} Python toolkit to extract the MFCCs, create a UBM-GMM and extract the i-vectors to represent each accent. 
