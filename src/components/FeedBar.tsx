// tslint:disable-next-line:ordered-imports
import * as React from 'react';
import { styles } from '../Styles';

interface IProps {
  id: string
  title: string
  text: string
}

export default class FeedBar extends React.Component<IProps> {
    public render() {
      return (
        <div className={styles.feed}>
          <article  key={this.props.id}  className={styles.card}>
            <h1 className={styles.cardtitle}>{this.props.title}</h1>
            <div className={styles.paragraphbody}>
              <p className={styles.cardescription}>
              {this.props.text}
            </p>
            </div>
          </article>
        </div>
      );
  }
}