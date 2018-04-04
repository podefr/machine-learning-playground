from loadDataset import getX, getY

# X corresponds to 5000 pictures of hand written numerals of 20*20=400 pixels converted to grayscale
X = getX()

# y corresponds to 5000 integers between 0 and 9 indicating to which number a given picture corresponds to
y = getY()