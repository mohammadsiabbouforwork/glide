import debounce from '../utils/debounce'
import { emit } from '../core/event/events-bus'

import EventsBinder from '../core/event/events-binder'

export default function (Glide, Components) {
  const Binder = new EventsBinder()

  return {
    /**
     * Initializes window bindings.
     */
    init () {
      this.bind()
    },

    /**
     * Binds `rezsize` listener to the window.
     * It's a costly event, so we are debouncing it.
     *
     * @return {Void}
     */
    bind () {
      Binder.on('resize', window, debounce(() => {
        emit('window.resize.before')

        this.resize()

        emit('window.resize.after')
      }, Glide.settings.debounce.resize))
    },

    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind () {
      Binder.off('resize', window)
    },

    /**
     * Handler for `resize` event. Rebuilds glide,
     * so its status matches new dimentions.
     * 
     * @returns {Void}
     */
    resize () {
      emit('window.resize')
    }
  }
}