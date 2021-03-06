import React, { Component } from 'react'

import Editor from 'components/Editor/Editor'

import Preview from 'components/Preview/Preview'

class App extends Component {
  constructor() {
    super()

    this.state = {
      html: ''
    }
  }

  setEditorValue = html => this.setState({ html })

  render() {
    const {
      html
    } = this.state
    return (
      <div className='page'>
        <div className='grid'>
          <p className='page__title'>
            <a
              className='page__link'
              href='https://github.com/zenoamaro/react-quill'
              target='_blank'
              rel='noopener noreferrer'>
                react-quill
            </a>
            demo
          </p>

          <Editor
            placeholder='Type here'
            updateEditorValue={this.setEditorValue} />

          <Preview
            heading='Output HTML'
            output={html} />
        </div>
      </div>
    )
  }
}

export default App
