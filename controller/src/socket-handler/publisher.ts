import { io } from '~/loader/'
// Start a server

// Send Files with the Start Server Event

// TODO: Request Static Server Files

// Request ServerLog

setInterval(() => {
	io.to('live-feed').send('publsiher')
}, 2000)
