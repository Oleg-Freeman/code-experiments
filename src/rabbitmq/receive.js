const amqplib = require('amqplib')

const queueName = "hello"
const cloudUrl = 'amqps://tkjguidr:OnhHhJdlZe0ii4x_MV4_5wOO6VdDAodD@sparrow.rmq.cloudamqp.com/tkjguidr'

const receiveMsg = async () => {
    const connection = await amqplib.connect(cloudUrl)
    const channel1 = await connection.createChannel()

    await channel1.assertQueue(queueName, { durable: false }) // durable - will create the queue once again after restart

    channel1.consume(queueName, msg => console.log(msg.content.toString()), { noAck: true })
}

receiveMsg()