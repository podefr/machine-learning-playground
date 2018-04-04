from scipy.io import loadmat

pictures = loadmat('ex3data1.mat')

def getX():
    return pictures['X'].tolist()

def getY():
    return pictures['y'].tolist()