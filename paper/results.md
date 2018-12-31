\cleardoublepage
\chapter{Evaluation and results}

In this chapter, I detail how the previously described experiments are evaluated following previous work such as \textcite{zhao2018a} and present their results.

# Evaluation

Voice conversion and accent conversion systems can be evaluated using either: a) objective measures or b) subjective measures. With objective measures, evaluation can be difficult as it requires intricate formulas that do not necessarily extrapolate across datasets or even individual audios \parencite{felps2010}. With subjective methods, 


[]In both cases, accent conversion systems are often evaluated on three features: the acoustic quality, speaker identity, and accentedness of each converted audio.]

In the case of my own experiments, I choose to evaluate using a perceptual study due its reliability and because of the complexity of using objective measures. I adapt the method utilized in \textcite{zhao2018a}, which in turn was adapted from \textcite{aryal2014}, another previous work from the same research group. This is done so that both experiments here can be juxtaposed against the results of their systems and because these metrics are fairly consistent throughout other perceptual evaluations of voice conversion/accent conversion systems. 


Specifically, I gather a group of \colorbox{magenta}{[???]} listeners to listen to 40 test samples with 20 taken from the experiment done with the ARCTIC corpus and 20 taken from the ABI corpus. 10 test samples are used for each evaluation criteria. The participants include a number of students a part of the Erasmus Mundus Language and Communication Technology Master's, as well as some local students from the University of the Basque Country, the University of Malta and other acquaintances of the author. The survey was also posted on Reddit under the /r/SampleSize subreddit and distributed by some participants recruited directly by the author to other acquaintances of the participants.
The number of listeners were decided upon by continuing to collect results until each speaker in both corpora had at least 5 evaluators. 

The survey was uploaded on to Google Forms, with the audios embedded on a separate page found on a GitHub Page associated with the GitHub repository for this work. The audios embedded were in .wav format (EXPAND ON FORMAT HERE), with the original audios outputted by the programmed system converted into a separate PCM .wav format using the command line interace of \texttt{ffmpeg} in order to better support in-browser playback as the original .wav format was not compatible with current HTML5 standards. These versions of the converted audios are included on the accompanying disc alongside the originals.

They are asked to evaluate on the perceived accent similarity using an ABX format to decide whether X is more similar to A or B. They are then asked to evaluated speaker identity on a voice similarity score ranging from -7 representing 'definitely different speakers' to +7 representing 'definitely same speaker'. They are also asked to indicate whether or not they consider themselves native speakers of English to observe whether or not there are any particular differences between the two populations in their evaluations on accent conversion.


# Results

## CMU ARCTIC Corpus

## ABI Corpus
