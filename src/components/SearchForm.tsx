import * as React from 'react';
import { Input, Button } from 'semantic-ui-react';

interface Props {
    editable: boolean;
    loading: boolean;
    handleSearch: (email: string, startDate: string, endDate: string) => void;
}
interface State {
    email: string;
    startDate: string;
    endDate: string;    
}

function getNowDate(): string {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();     
    return yyyy + '-' + mm + '-' + dd;
}

function getLastWeekDate(): string {
    let today = new Date();
    let lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    let dd = lastWeek.getDate();
    let mm = lastWeek.getMonth() + 1;
    let yyyy = lastWeek.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
}
export default class SearchForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.updateEmail = this.updateEmail.bind(this);        
        this.updateStartDate = this.updateStartDate.bind(this);
        this.updateEndDate = this.updateEndDate.bind(this);

        // const { sc } = this.props;        
        this.state = { email: 'abc@a.com', startDate: getLastWeekDate(), endDate: getNowDate()};

    }

    handleClick(e: React.FormEvent<any>) {
        const { email, startDate, endDate } = this.state;        
        this.props.handleSearch(email, startDate, endDate);
    }

    updateEmail(value: string) {
        this.setState({ email: value });
    }

    updateStartDate(value: string) {
        this.setState({ startDate: value });
    }

    updateEndDate(value: string) {
        this.setState({ endDate: value });
    }

    render() {
        const { editable, loading } = this.props;

        const { email, startDate, endDate } = this.state;
        const { handleClick, updateEmail, updateStartDate, updateEndDate } = this;

        return (            
            <div className="ui form">
                <div className="field">
                    <label>이메일</label>
                    <Input placefoler="Email" type="text" value={email} disabled={!editable} onChange={e => updateEmail(e.currentTarget.value)} />
                </div>
                <div className="field">
                    <label>조회기간</label>
                </div>
                <div className="fields">                      
                    <div className="field">                    
                        <Input placefoler="Sart Date" type="text" value={startDate} disabled={!editable} onChange={e => updateStartDate(e.currentTarget.value)} />
                    </div>
                    <div className="field">                    
                        <Input placefoler="End Date" type="text" value={endDate} disabled={!editable} onChange={e => updateEndDate(e.currentTarget.value)} />
                    </div>
                    <div className="field">                    
                        <Button primary={true} loading={loading} onClick={handleClick}>조회</Button>
                    </div>
                </div>
            </div>
        );
    }
}