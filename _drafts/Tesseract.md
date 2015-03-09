## Tesseract 

1. Convert pdf to png 
$ convert -density 300 doc1053561.pdf doc1053561_%04d.png

2. Convert png to tif
mogrify -format tif *.png

3. Run tesseract on those tif files
$ for i in *tif; do b=`basename "$i" .tif`; tesseract "$i" "$b" hocr; done

4. Put all the HTML files into one 
$ ls -1 *.html | while read fn ; do cat "$fn" >> output.html.file; done

### Others
montage -mode Concatenate -tile 1x -density 144 -type Grayscale doc1053561.pdf output.png

convert -density 300 doc1053561.pdf filename.png

convert -density 300 doc1053561.pdf doc1053561_%04d.png

convert output.png -resize 200% -type Grayscale input.tif

convert filename.png -type Grayscale input.tif

mogrify -format tif *.png

tesseract -l eng filename-0.tif output

for i in *.tif ; do tesseract $i outtext;  done;

for i in *tif; do b=`basename "$i" .tif`; tesseract "$i" "$b" hocr; done

for f in *.html; do type "$f">>master.html

cat $(ls -t *.html ) > outputfile

ls -1 *.html | while read fn ; do cat "$fn" >> output.html.file; done