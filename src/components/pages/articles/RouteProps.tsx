
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
    name: string;
}

export interface Props extends RouteComponentProps<MatchParams> {
}

