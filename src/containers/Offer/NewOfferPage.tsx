import * as React from 'react';
import NewOfferForm from '../../components/forms/issuer/NewOfferForm';

import { OFFER_TYPES, IOfferContent } from '../../constants/offer-types';

export interface INewOfferPageProps {
}

export interface INewOfferPageState {
}

export default class NewOfferPage extends React.Component<INewOfferPageProps, INewOfferPageState> {
    constructor(props: INewOfferPageProps) {
        super(props);

        this.state = {
        }
    }

    SubmitOffer = (info: IOfferContent) => {
        console.log(info);
    }

    public render() {
        return (
            <NewOfferForm offerTypes={OFFER_TYPES} handleSubmit={this.SubmitOffer} />
        )
    }
}
