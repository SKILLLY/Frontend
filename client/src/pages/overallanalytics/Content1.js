import React from "react"
import "../../font-awesome/css/font-awesome.min.css"
import Compare from './Compare'


class Content1 extends React.Component {
    render() {
        const overallanalyticsdata = this.props.overallanalyticsdata

        return (
          <div class="content-box">
            <div>
                <Compare />
            </div>
        </div>
        );
    }
}

export default Content1
