import * as React from "react"

export interface TestProps {
  clientId: string
  secret: string
}

export class Test extends React.Component<TestProps, { }> {
    render() {
        return (
          <ul>
            <li>clientId: {this.props.clientId}</li>
            <li>secret: {this.props.secret}</li>
          </ul>
        )
    }
}