import { spawn } from 'child_process'
import chokidar from 'chokidar'

const watch = () => {
    const watcher = chokidar.watch('src', {
        ignored: ['node_modules', '.git'],
        persistent: true
    })

    let build = null
    watcher.on('change', (event) => {
        console.log(`File ${event.path} has changed.`)
        if (!(build === null)) {
            build.kill()
        }

        build = spawn('npm', ['run', 'build:js'], {
            stdio: 'inherit'
        })

        build.on('close', (code) => {
            build = null

            console.clear()
            console.log(`Done! ${code}`)
        })
    })
}

watch()
