import tensorflow as tf
import numpy as np

session = tf.Session()
session.as_default()

training_X = np.array([ [1, 2, 3], [2, 3, 5], [2, 5, 8] ])

training_Y = np.array([ [2], [3.1666], [5] ])

m = training_X.shape[0]

x = tf.placeholder(tf.float32, [m, 3])
W = tf.Variable(tf.random_normal([3, 1]))
b = tf.Variable(tf.zeros([1]))

linear_model = tf.matmul(x, W) + b
y = tf.placeholder(tf.float32, [m, 1])

cost = tf.reduce_mean(tf.square(linear_model - y))

train_step = tf.train.GradientDescentOptimizer(0.01).minimize(cost)

init = tf.global_variables_initializer()

session.run(init)

for i in range(1000):
    session.run(train_step, feed_dict={x: training_X, y: training_Y})

print("Learned parameters %s" % session.run(W))
print("Learned bias %f" % session.run(b))

print("Proof", np.matmul(training_X, session.run(tf.transpose(W)[0])) + b.eval(session))

test_X = np.array([[1, 5, 8], [1, 3, 8]])

print("Expected", np.array([[4.83333], [3.5]]))
print("Actual", np.matmul(test_X, session.run(tf.transpose(W)[0])) + b.eval(session))



