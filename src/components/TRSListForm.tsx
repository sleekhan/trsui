import * as React from 'react';
import TRSRecord from '../model/TRSRecord';
import { Table } from 'semantic-ui-react';

interface Props {
    trs: TRSRecord[];
}

interface State {}

export default class TRSListForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        const { trs } = this.props;       

        return (
            <div style={{width: '700px'}}>
                <Table singleLine={true} size="small">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width="1">일자</Table.HeaderCell>
                        <Table.HeaderCell width="1">출근시간</Table.HeaderCell>
                        <Table.HeaderCell width="1">퇴근시간</Table.HeaderCell>
                        <Table.HeaderCell width="1">근무시간</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {
                    trs.map( (tr) =>  (
                        <Table.Row>
                            <Table.Cell>{tr.date}</Table.Cell>
                            <Table.Cell>{tr.in}</Table.Cell>
                            <Table.Cell>{tr.out}</Table.Cell>
                            <Table.Cell>{tr.timeDiff}</Table.Cell>
                        </Table.Row>
                    ))
                }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan="4">&nbsp;</Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
                </Table>
            </div>
        );
    }

}