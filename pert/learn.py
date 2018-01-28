import tensorflow as tf
import numpy as np
import generateTrainingSet

session = tf.Session()
session.as_default()

# Generate training set (x, y) of size 1000
m = 100000

training_X = generateTrainingSet.generateX(m)
training_Y = generateTrainingSet.computeY(training_X)

# initialize placeholder for training set
x = tf.placeholder(tf.float32, [m, 3])

# initialize weights and bias to 0
W = tf.Variable(tf.zeros([3, 1]))
b = tf.Variable(tf.zeros([1]))

# polynomial function, vectorized implementation. this expands to
# b + x1*W1 + x2*W2 + x3*W3
linear_model = tf.matmul(x, W) + b

# training labels
y = tf.placeholder(tf.float32, [m, 1])

# cost function is mean of squared errors
cost = tf.reduce_mean(tf.square(linear_model - y))

# minimize cost function with 0.001 learning rate
train_step = tf.train.GradientDescentOptimizer(0.001).minimize(cost)


# necessary step for tensorflow
init = tf.global_variables_initializer()

session.run(init)

for i in range(1000):
    session.run(train_step, feed_dict={x: training_X, y: training_Y})

print("Learned parameters", session.run(W))
print("Learned bias", session.run(b))

test_X = np.array([[1, 5, 8], [1, 3, 8]])

print("Expected", np.array([[4.83333], [3.5]]))
print("Actual", np.matmul(test_X, session.run(tf.transpose(W)[0])) + b.eval(session))


