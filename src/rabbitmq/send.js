const amqplib = require('amqplib')

const queueName = "hello"
const msg = "hello wrot"
const cloudUrl = 'amqps://tkjguidr:OnhHhJdlZe0ii4x_MV4_5wOO6VdDAodD@sparrow.rmq.cloudamqp.com/tkjguidr'

const sendMsg = async () => {
    const connection = await amqplib.connect(cloudUrl)
    const channel1 = await connection.createChannel()

    await channel1.assertQueue(queueName, { durable: false }) // durable - will create the queue once again after restart

    channel1.sendToQueue(queueName, Buffer.from(msg))

    setTimeout(() => {
        connection.close()
        process.exit(0)
    }, 500  )
}

sendMsg()