import React from 'react';
import '../stylesheets/launcher-issues/Launcher-issues.scss';

export default function LauncherIssuePage() {
    return (
        <div className="launcher-issues-main-container">
            <div className="body-container">
                <h1>How To Fix Launcher Issues</h1>
                <div className="text-body">
                    <p>
                       &emsp;&emsp;Recently the launcher has had issues with about 1/2 the players when they <i>first</i> start
                       installing Darkan. Typically, once they finish installing Darkan with all graphical features
                       fixed, everything turns out fine. So, if you are one of those 50%, hang in there and follow some
                       of these instructions to get to the other side and enjoy Runescape 2012!
                    </p>
                </div>
                <div className="alt-header">Common issues</div><br></br>
                <div className="text-body">
                    <i>My Java jar doesn't launch at all?</i><br></br>
                    Make sure you are running Java 17.
                    <br></br>
                    <br></br>
                    <i>The Windows installer did nothing?</i><br></br>
                    Use the Java Jar.
                    <br></br>
                    <br></br>
                    <i>My graphics are stuck in safe mode and I am lagging!</i><br></br>
                    This is an issue with Java, not Darkan. The main solution at this time is to try different versions of Java until one works.
                    <br></br>
                    <img src="/stuck_gfx.png"/>
                    <br></br>
                    <br></br>
                    <i>What if both things above fail?</i><br></br>
                    If all else fails, try to use different versions of
                    Java 17 JRE, SDK. For some reason different versions of Java work for different people for reasons we
                    don't really know.
                    <br></br>
                    <br></br>
                    <i>I really don't know how to check my java versions??</i><br></br>
                    Open a command prompt and type "java -version". If you see a command error, that means you don't
                    have a path setup for the Java executable, check the "How to switch Java versions" video below...
                    <br></br>
                    <img src="/check_java.png"/>
                </div>
                <div className="alt-header">Useful videos</div><br></br>
                <div className="text-body">
                    <a href="https://www.youtube.com/watch?v=A5FHcR3cE-w&ab_channel=CodeWithArjun" target="_blank">How to switch Java versions</a><br></br>
                    <a href="https://youtu.be/NrDKNOZfhcg" target="_blank">Making an account</a><br></br>
                </div>
            </div>
        </div>
        )
}
