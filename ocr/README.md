Optic character recognition using Logistic Regression
=====================================================

the goal is to recognize digits based on 20x20 grayscale images using logistic regression

Loosely based on Andrew Ng's Machine Learning Coursera course and [Soon Hin Khor's intro to machine learning](https://medium.com/all-of-us-are-belong-to-machines/gentlest-intro-to-tensorflow-4-logistic-regression-2afd0cabc54) 

The dataset was obtained from Coursera's machine learning course in ex3.

## Training Set

`getX()` returns a list of 5,000 pictures of 20x20 pixels inlined into a list of 400 items:

```
[  
  [ (pixel0,0), (pixel 0,1), (pixel 0,2) .... (pixel20,20) ] // picture 1
  [ (pixel0,0), (pixel 0,1), (pixel 0,2) .... (pixel20,20) ] // picture 2
  [ (pixel0,0), (pixel 0,1), (pixel 0,2) .... (pixel20,20) ] // picture 3
  ...
  [ (pixel0,0), (pixel 0,1), (pixel 0,2) .... (pixel20,20) ] // picture 5,000
]
```

`getY()` returns a list of 5,000 numbers between 0 and 9 indicating which number the picture corresponds to:

```
[
  0 // picture 1 is a 0
  0 // picture 1 is a 0
  0 // picture 1 is a 0
  ....
  9 // picture 5,000 is a 9
]
```

