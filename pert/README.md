PERT
====

This is a very simple application of linear regression to learn TensorFlow.

The perf formulate for an estimation is:

```
1 x best + 4 x expected + 1 x worst / 6.
```

So for example, with an estimate of

```
1 + 2 + 3 gives 2
1 + 3 + 5 gives 3
```

My goal with linear regression is, given calculated PERT, to determine the parameters of the formule so I can calculate new PERTS.

My labelled data (supervised learning) looks like:

```
    X            Y
[ 1 2 3         [ 2 ]
  1 3 5 ]       [ 3 ]
```
