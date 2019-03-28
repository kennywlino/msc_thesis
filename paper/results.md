\cleardoublepage
\chapter{Results}

In this chapter, we present the results of the perceptual study which evaluated the performance of the systems in terms of perceived accent and speaker identity. We then discuss the results and point to potential reasons for the outcome. 

# CMU ARCTIC Corpus

## Perceived Accent
In order to assess the performance of the participants on the perceived accent task, we compared their answers to the ABX questions to the 'correct' or desired accents. According to the distribution of their scores, the accuracy of the evaluators on the task varied from being only 30% accurate to 100% accurate, with evaluators being 92.2% accurate on average. Following the median score, the participants were 100% accurate at identifying the 'correct' accent of the converted audio. The distribution of the participants' scores on the perceived accent task can be seen in \autoref{fig:arc-pa-results}. The range of the plot starts from 30% in order to better see the highly skewed data. The various data points display the outliers found in the data, which is calculated using the standard formula of 1.5 times the interquartile range below the lower quartile.

Although the evaluators had a very high mean and median, a z-test was conducted to observe whether the performance of the evaluators on this task was statistically significant. As expected, the z-test gave us a p-value of 0.007, proving that their performance was better than chance. This suggests that the evaluators were able to assess the accent of the converted audio X with a high level of confidence.

\begin{figure}[]
\centering
\includegraphics[width=1\textwidth]{img/arc_PA_mean_boxplot.png}
\caption{The distribution of correct answers on the Perceived Accent task for the ARCTIC Corpus per participant.}
\label{fig:arc-pa-results}
\end{figure} 

After evaluating the performance of the participants on the Perceived Accent task as a whole, we also took a look at each accent individually to investigate if there were any particularities. From the mean scores of the PA task across accents, it appears that the evaluators had the most trouble with the Spanish female and Hindi female accents, with average scores of 84.00\% and 86.00\% respectively. However, following the p-value of 0.47 given from a one-way ANOVA test, there were no statistically relevant differences.  

\begin{table}[]
\centering
\begin{tabular}{|l|r|}
\hline
\textbf{ARCTIC Speaker} & \textbf{Correct \%} \\ \hline
Hindi F                  & 86.66\%             \\ \hline
Hindi M                  & 100.00\%             \\ \hline
Korean F                 & 100.00\%            \\ \hline
Korean M                 & 91.66\%            \\ \hline
Spanish F                & 84.00\%             \\ \hline
Spanish M                & 96.25\%             \\ \hline
\end{tabular}
\caption{The mean accuracy on the PA task for the ARCTIC experiment across accents.}
\label{table:pa-mean-per-accent}
\end{table}

In order to confirm that there were no differences in the scores of the native speakers vs. the non-native speakers, we ran a t-test. Examining the mean scores for both groups showed that they likely performed similarly, as native speakers had a mean accuracy of 92.94\%, and native speakers 91.57\%. Both groups had a median score of 100%.  As expected, there was no statistically significant difference between the performance of the native and non-native speakers with a high p-value of 0.80.

## Speaker Identity
As discussed previously, the Speaker Identity task consisted of 10 pairs of audio, those of which include accent converted audios with the original native audio (AC-Native) and accent converted audios with the original L2 audio (AC-L2). During the calculations of the means, it was noted that one question was left blank by an evaluator for the Korean M speaker, so the value was imputed using the average score of the other Korean M evaluators rounded to the nearest integer. 

An examination of the results showed that the evaluators found the voice similarity score to be on average, around 3.9 for the AC-Native pairs, suggesting that they were 'confident' that the AC audio and the native audio were the same speaker. Similarly, the evaluators found the speaker identity score to be on average, around -3.7 for the AC-L2 pairs, suggesting that they were 'confident' that the AC audio and the native audio were two separate speakers. The distribution of the voice similarity scores for both pair type can be seen in \autoref{fig:arc-si-results}. The range starts from -7 and goes to 7 to represent the scale used in the evaluation task. The median score does not appear in the boxplot as it coincides with the max score.

\begin{figure}[]
   \centering
   \begin{subfigure}[b]{1\textwidth}
      \includegraphics[width=1\textwidth]{img/arc_SI_mean_ns_boxplot.png}
         \caption{AC-Native Questions}
         \label{fig:arc-si-ns-results}
   \end{subfigure}
   \quad
   \begin{subfigure}[b]{1\textwidth}
      \includegraphics[width=1\textwidth]{img/abi_SI_mean_nns_boxplot.png}
         \caption{AC-L2 Questions}
         \label{fig:arc-si-nns-results}
   \end{subfigure} 
   \quad
   \caption{The distribution of the mean voice similarity scores on the Speaker Identity task per participant.}
   \label{fig:arc-si-results}
\end{figure}

In order to confirm that there were no statistically relevant differences for the speaker identity scores across accents, we utilized a one-way ANOVA test. As hypothesized, there were no statistically relevant differences between the mean voice similarity scores for both the AC-Native pairs and the AC-L2 pairs with a p-value of 0.87 and 0.16 respectively. Finally, to verify any potential differences between the assessment of the native English speaking evaluators and non-native English speaking evaluators, we ran a t-test. Similar to the ANOVA, there was no statistical difference found with a p-value of 0.77 and 0.91 for the AC-Native and AC Non-native questions. The average voice similarity score across accents can be seen in \autoref{table:arc-si-per-speaker}.

\begin{table}[]
\centering
\begin{tabular}{|l|r|r|}
\hline
\textbf{ABI Speaker} & \textbf{AC-Native Mean} & \multicolumn{1}{l|}{\textbf{AC-L2 Mean}} \\ \hline
Hindi F                & 2.8                   & -4.3                                      \\ \hline
Hindi M                & 3.3                     & -6.2                                     \\ \hline
Korean F                & 5.0                    & -3.9                                     \\ \hline
Korean M                & 4.0                     & -1.7                                     \\ \hline
Spanish F                & 4.7                    & -3.4                                     \\ \hline
Spanish M                & 4.4                     & -3.3                                     \\ \hline
\end{tabular}
\caption{The average voice similarity score on the Speaker Identity task for the ARCTIC corpora across accents}
\label{table:arc-si-per-speaker}
\end{table}
 
# ABI Corpus

## Perceived Accent
Like the CMU ARCTIC experiments, we compared the participants responses to the ABX questions with the 'correct' or desired accents. From taking a first glance at the results, the participants varied greatly in their responses ranging from being 100% correct about what accent the converted audio X was closest to, to being 0% correct. Following the average score, the participants were right about 81% of the time. However, when considering the median performance of the subjects, the users were able to identify the correct accent 100% of the time. A z-test using these results showed that the performance of the participants was nearly significant, with an alpha of 0.05 and a p-value of 0.051. This would suggest that the performance of the subjects were _not_ better than chance. However, when re-running the z-test without the 0% correct score, we get a p-value of 0.025, thus indicating that the reviewers were able to assess the perceived accents of the converted audios with statistical significance.

The distribution of the scores on the Perceived Accent task can be seen in the boxplot of \autoref{fig:abi-pa-results}. Here, the boxplot ranges from 0 to 100% as there were scores of 0% contained in this dataset. The median score does not appear in the boxplot as it coincides with the maximum score.

\begin{figure}[]
\centering
\includegraphics[width=1\textwidth]{img/abi_PA_mean_boxplot.png}
\caption{The distribution of correct answers on the Perceived Accent task for the ARCTIC Corpus per participant.}
\label{fig:abi-pa-results}
\end{figure} 

After examining the performance of the reviewers on the perceived accent task as a whole, the performance of the reviewers was evaluated across each individual accent to observe if the lower scores were caused by a particular accent. As described in the experimental set-up, the Glasgow, Lancashire, and East Anglian accents were chosen based on their level of similarity to the Standard Southern English accent. As hypothesized, the mean percentage of correct answers were the highest for the Glasgow accent at 100%-- the most dissimilar accent to the Standard Southern English accent, while the mean percentage of correct answers for the East Anglian _female_ was the lowest at 22.5%. The mean accuracy on the Perceived Accent task across speaker can be seen in \autoref{table:pa-mean-per-accent}.

\begin{table}[]
\centering
\begin{tabular}{|l|r|}
\hline
\textbf{ABI Speaker} & \textbf{Correct \%} \\ \hline
EAN F                & 22.50\%             \\ \hline
EAN M                & 87.77\%             \\ \hline
GLA F                & 100.00\%            \\ \hline
GLA M                & 100.00\%            \\ \hline
LAN F                & 68.00\%             \\ \hline
LAN M                & 84.28\%             \\ \hline
\end{tabular}
\caption{The mean accuracy on the PA task for the ABI corpus across accents.}
\label{table:pa-mean-per-accent}
\end{table}

A one-way ANOVA test based on the mean scores per accent shows that the low results for the East Anglian female speaker was not a result of chance, with a p-value of .000002. This indicates that there were significant issues for the conversion of this accent to the Standard Southern English accent. A one-way ANOVA test was also ran for the rest of the accents, but as predicted, no statistical difference was found given a p-value of 0.07.     

A t-test was also ran to compare the performance of the native speakers vs. the non-native speakers. A quick glance at the mean and median scores of the native speakers vs. non-native speakers showed that both groups performed about the same, with native speakers getting the accent of the converted audio correct on average 79.4% of the time, and non-native speakers getting the accent of the converted audio on average 82.1% of the time. Both groups also had a median score of 100.0%. Naturally, following the results of the t-test, both the native and non-native speakers performed equally on the task as the t-test returned a p-value of 0.79, a value much higher than an alpha of 0.05. 

## Speaker Identity
Like the CMU ARCTIC corpus, the speaker identity task for the ABI Corpus also consisted of 10 pairs of audio. However, in this case, because the speakers are all native speakers, the paired audios are better described as accented converted audios paired with the original source audio, and accent converted audios paired with the original target audio. With this said, because of the confusion nature between source vs. target audio (e.g. source speaker being the _native speaker_ and target speaker being the _non-native speaker_ as in the ARCTIC experiment), and to keep in tune with the ARCTIC experiment, they will still be referred to as AC-Native and AC-L2 pairs in the discussion here. 

Following the results, the evaluators scored the AC-Native audios to have a voice similarity score of 2.6 on average, indicating that they were 'somewhat' certain that the AC audios were the same person as the native audios. They also scored the AC-L2 audios to have a voice similarity score of -3.2 to indicate that they were 'confident' that the AC audios were _not_ the same person as L2 audios. The distribution of the overall speaker identity means per question type (AC-Native and AC-L2) can be observed in \autoref{fig:abi-si-results}. Similarly, these boxplots range from -7 to 7 to represent the possible scores in the evaluation task.

\begin{figure}[]
   \centering
   \begin{subfigure}[b]{1\textwidth}
      \includegraphics[width=1\textwidth]{img/abi_SI_mean_ns_boxplot.png}
         \caption{AC-Native Questions}
         \label{fig:abi-si-ns-results}
   \end{subfigure}
   \quad
   \begin{subfigure}[b]{1\textwidth}
      \includegraphics[width=1\textwidth]{img/abi_SI_mean_nns_boxplot.png}
         \caption{AC-L2 Questions}
         \label{fig:abi-si-nns-results}
   \end{subfigure} 
   \quad
   \caption{The distribution of the mean voice similarity scores on the Speaker Identity task for the ABI corpus per participant.}
   \label{fig:abi-si-results}
\end{figure}

Similar to the perceived accent evaluation criteria, a one-way ANOVA test was run to compare whether there were any statistically relevant outliers for the speaker identity scores across accents. When running the ANOVA test on the AC-Native mean scores for all speakers used in the ABI experiment, there were no statistically relevant outliers, with a p-value of 0.055. However, the ANOVA test on the AC-L2 mean scores for all speakers gave a p-value of .00000694, indicating that there were indeed accents that were significantly different from the other accents. From re-running the ANOVA with various groups of accents, it was found that EAN F and LAN F were significantly different from the other accents, with a p-value of .0000563 for the EAN F accent compared to the other accents with LAN F removed, and a p-value of 0.024 for the LAN F accent compared to the other accents with EAN F removed. The average voice similarity score across accents can be seen in \autoref{table:abi-si-per-speaker}.

\begin{table}[]
\centering
\begin{tabular}{|l|r|r|}
\hline
\textbf{ABI Speaker} & \textbf{AC-Native Mean} & \multicolumn{1}{l|}{\textbf{AC-L2 Mean}} \\ \hline
EAN F                & -1.3                    & 3.2                                      \\ \hline
EAN M                & 2.7                     & -4.4                                     \\ \hline
GLA F                & 4.2                     & -4.9                                     \\ \hline
GLA M                & 5.4                     & -4.9                                     \\ \hline
LAN F                & -0.3                    & -0.7                                     \\ \hline
LAN M                & 3.4                     & -4.4                                     \\ \hline
\end{tabular}
\caption{The average voice similarity score on the Speaker Identity task for the ABI corpus across accents.}
\label{table:abi-si-per-speaker}
\end{table}

A t-test was also used in order to observe any potential differences between the assessment of the native English speaking evaluators and non-native English speaking evaluators, but there was no statistical difference found with a p-value of 0.93 and 0.77 for the AC-Native and AC Non-native questions respectively. This suggests that both native speakers and non-native speakers were able to evaluate for speaker identity with the same level of confidence.

# Discussion

Following the results of the survey, there are two main points to focus on. In both the ARCTIC and ABI experiments, speakers indicated that they were very confident that the converted audios indeed had the desired accents, with both experiments having median scores of 100%. However, the results from the speaker identity task were quite contrary, with the averages for the ARCTIC corpus being 3.9 for the AC-Native pairs, and -3.7 for the AC-L2 pairs; the ABI corpus had an average of 2.6 for the AC-Native pairs, and -3.2 for the AC-L2 pairs. Referring back to the evaluation criteria, -7 on the voice similarity scale indicates that the two pairs of audio are 'definitely' 2 separate speakers, while 7 indicates that the two pairs of audio are 'definitely' the same speaker. Thus, with the AC-Native pairs, the ideal score would be closer to -7, and with the AC-L2 pairs, they should be closer to 7. This indicates that there was an issue retaining the identity of the speaker during conversion. 

However, interestingly, there were a few statistically relevant outliers with speakers from the ABI corpus. Taking a look again at the mean scores in the perceived accent task, the East Anglian female had the lowest percentage correct at 22.5\%. The voice similarity scores of the Lancashire and East Anglian female accents also stood out as well, with the Lancashire female having a voice similarity score of -0.7 and the East Anglian female having a mean voice similarity score of 3.2 in the AC-L2 pairs-- the only positive voice similarity score. This means that the East Anglian female accent was the only accent from both experiments to have scores that were the exact mirror of the other accents. 

When considering why the East Anglian female accent sticks out as compared to the other accents, there are a number of possible explanations. For one, when referring back to the selection of accents used in the experiments, the East Anglian accent was also the most similar accent to the Standard Southern English accent. This could mean that the evaluators may have had a hard time judging the distinctions between the East Anglian and Southern Standard English accents. This hypothesis also holds true when examining the other two accents, as the evaluators had a mean score of 100% for both the male and female Glasgow speakers, and a mean score of 68% and 84% on the Lancashire speakers. This means that the evaluators were able to identify the accents of the converted audios more or less in the order of the varience of accents from the Standard Southern English accent.

Upon investigating why the Lancashire and East Anglian female accents had distinct voice similarity scores, their converted audios compared with their original source and target audios gave good indication. In both cases, the speakers sounded very similar. In other words, although the source and target speakers were indeed two separate speakers, the voice quality of both speakers in each pair sounded fairly similar. This was particularly evident when listening to the original source and target audios of the East Anglian pairs. This likely explains the low mean score on the perceived accent task and the high voice similarity score on the speaker identity task. 

Compared to previous work such as \textcite{zhao2018} which also utilizes an almost similar approach as a baseline, the performance of the current system is somewhat worse as the perceived accent and speaker identity scores from their systems are higher. However, this could possibly be attributed to the removal of the vocal tract length normalization step during conversion. 

While this work does not point to any advances towards to improvement of accent conversion as a whole, it does begin the path in investigating native to native conversion. Although the results of the perceptual study do not allow us to make any concrete conclusions, the somewhat more successful results of the ABI experiments may allow us to suggest that there are more subtle nuances that may not be captured or converting using this more traditional approach to accent conversion. This would have to be further investigated in order to be confirmed.
