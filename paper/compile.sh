#!/bin/bash

rm output.*

# Translate the Markdown files into LaTeX

pandoc -f markdown -t latex ./abstract.md -o abstract.tex
pandoc -f markdown -t latex ./abbreviations.md -o abbreviations.tex
pandoc -f markdown -t latex ./acknowledgments.md -o acknowledgments.tex
pandoc -f markdown -t latex ./introduction.md -o introduction.tex
pandoc -f markdown -t latex ./background.md -o background.tex
pandoc -f markdown -t latex ./lit-review.md -o lit-review.tex
pandoc -f markdown -t latex ./methodology.md -o methodology.tex
pandoc -f markdown -t latex ./results.md -o results.tex
pandoc -f markdown -t latex ./conclusion.md -o conclusion.tex
pandoc -f markdown -t latex ./annexe.md -o annexe.tex

# pandoc -f markdown -t latex ./Appendix.md -o Appendix.tex

# Concatenate all LaTeX files into one big file

cat ./header.tex >> output.tex
cat ./plagiarism.tex >> output.tex
cat ./acknowledgments.tex >> output.tex
cat ./abstract.tex >> output.tex
cat ./TOC.tex >> output.tex
cat ./Figures.tex >> output.tex
cat ./abbreviations.tex >> output.tex
cat ./introduction.tex >> output.tex
cat ./background.tex >> output.tex
cat ./lit-review.tex >> output.tex
cat ./methodology.tex >> output.tex
cat ./results.tex >> output.tex
cat ./conclusion.tex >> output.tex
cat ./annexe.tex >> output.tex
cat ./Literature.tex >> output.tex
# cat ./Body.tex >> output.tex
# cat ./Appendix.tex >> output.tex
# cat ./Integrity.tex >> output.tex
cat ./footer.tex >> output.tex


# Typeset the LaTeX thingie and build a nice pdf

pdflatex output
biber output
pdflatex output

# Check command line arguments and commit/push to git repo

if [ $# -eq 2 ]
        then
                if [ "$1" = "push" ]
                        then
                                /usr/bin/git add *
                                /usr/bin/git commit  -m "$2"
                                /usr/bin/git push
                        else
                                echo "If you want to push to git, please say so... "
                fi
	else
        	echo "Not pushed to git repo!"
fi

# cleanup

rm abstract.tex
rm abbreviations.tex
rm introduction.tex
rm background.tex
rm lit-review.tex
rm methodology.tex
rm results.tex

