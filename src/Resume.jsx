import React from 'react'
import { Document, Page } from 'react-pdf'
import NavBar from './NavBar'
import { Viewer } from '@react-pdf-viewer/core';
// import pdf from 'public/Resume-Wangui.pdf'

function Resume() {
  return (
    <>
      <div>
        <Viewer fileUrl="/Resume-Wangui.pdf" />
      </div>
        {/* <div id='resume'>
            <NavBar />
            <h2>Resume</h2>
            <Document file='public\Resume-Wangui.pdf' >
                <Page pageNumber={1}/>
            </Document>
        </div> */}
    </>
  )
}

export default Resume