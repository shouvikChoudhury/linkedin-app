import React from 'react'
import "./Styles/Widget.css"
import InfoIcon from '@mui/icons-material/Info';

export default function Widget() {
    return (
        <div className="widget">
            <div className="widget_top">
                <div className="widget__header">
                    <h4>LinkedIn News</h4>
                    <InfoIcon />
                </div>
                <div className="widget__body">
                    <ul className="widget__options">
                        <li>
                            <h4>Slaying Job Search Fees</h4>
                            <p>6d ago * 4,55 readers</p>
                        </li>
                        <li>
                            <h4>Laying off in Jobs</h4>
                            <p>2d ago * 5,55 readers</p>
                        </li>
                        <li>
                            <h4>WFH Job Search</h4>
                            <p>1d ago * 4,05 readers</p>
                        </li>
                        <li>
                            <h4>WFO Job Search</h4>
                            <p>4d ago * 4,00 readers</p>
                        </li>
                        <li>
                            <h4>Remote Job Search</h4>
                            <p>5d ago * 3,22 readers</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="widget_bottom">
                <div className="widget__header">
                    <h4>Today's top courses</h4>
                    <InfoIcon />
                </div>
                <div className="widget__body">
                    <ul className="widget__options">
                        <li>
                            <h4>Leading with a Heavy Heat</h4>
                            <p>Kay Coly</p>
                        </li>
                        <li>
                            <h4>Reading a Book</h4>
                            <p>Slay Point</p>
                        </li>
                        <li>
                            <h4>Foundations of Codig</h4>
                            <p>Coly Root</p>
                        </li>
                        <li>
                            <h4>Basics of Frontend</h4>
                            <p>W Lions</p>
                        </li>
                        <li>
                            <h4>Understanding Fullstack</h4>
                            <p>Sagar Kr</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
