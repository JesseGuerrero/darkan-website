import React from 'react';
import '../stylesheets/download/Download.scss';

export default function DownloadPage() {
    return (
        <div className="download-main-container">
            <div className="download-sub-container">
                <div className="download-header">
                    <h1>Download & Play</h1>
                </div>
                <div className="button-container">
                    <div>
                        <button className="download-client1 button-hover"><a href="DarkanSetup.msi" download><h2>Windows Installer</h2></a></button>
                    </div>
                    <div>
                        <button className="download-client2 button-hover"><a href="Darkan.jar" download><h2>Java 17 Jar</h2></a></button>
                    </div>
                </div>
            </div>
        </div>
        )
}
