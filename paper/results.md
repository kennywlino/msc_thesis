\cleardoublepage
\chapter{Evaluation and results}

In this chapter, I detail how the previously described experiments are evaluated following previous work such as \textcite{zhao2018a} and present their results.

# Evaluation

Voice conversion and accent conversion systems can be evaluated using either: a) objective measures or b) subjective measures. With objective measures, evaluation can be difficult as it requires intricate formulas that do not necessarily extrapolate across datasets or even individual audios \parencite{felps2010}. With subjective methods, 


In both cases, accent conversion systems are often evaluated on three features: the acoustic quality, speaker identity, and accentedness of each converted audio. 

In the case of my own experiments, I choose to evaluate using a perceptual study due its reliability and because of the complexity of using objective measures. I adapt the method utilized in \textcite{zhao2018a}, which in turn was adapted from \textcite{aryal2014}, another previous work from the same research group. This is done so the reimplementation of their baselines can be compared against the baselines in their work and so the i-vector method can be directly juxtaposed against both sets of baselines as well as the current best method of using phonetic posteriorgrams discussed in \textcite{zhao2018a}. 

Specifically, I gather a group of \colorbox{magenta}{[15-30?]} listeners to listen to \colorbox{magenta}{[15-150?]} test samples, with [33%] taken from each system. They are asked to evaluate on the acoustic quality using a 5-point Mean Opinion Scoring system, with 1 representing 'Bad' and 5 representing 'Excellent' and the speaker identity on a voice similarity score ranging from -7 representing 'definitely different speakers' to +7 representing 'definitely same speaker'. They are then asked to evaluate the accentedness of the test samples using a preference test to compare the VC system vs. the i-vector system, the AC system vs. the i-vector system, and the original L2 audio vs. the i-vector system. \colorbox{magenta}{[How will this be compared to the posteriorgram system?]} 
