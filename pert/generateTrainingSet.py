import numpy as np
from random import sample

def generateX(trainingSetSize):
    return np.array(list(map(lambda x: sample(range(20), 3), range(trainingSetSize))))

def computeY(arr):
    return np.array(np.matmul(arr, [1, 4, 1]) / 6).reshape(arr.shape[0], 1)
