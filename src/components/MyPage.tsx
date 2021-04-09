import { IonContent, IonPage } from '@ionic/react';
import { i18n } from '@lingui/core';
import { defineMessage } from '@lingui/macro';
import React from 'react';

interface MyProps {
  title?: string,
}

const MyPage: React.VFC<MyProps> = ({ title }: MyProps) => (
  <IonPage>
    <IonContent>
      {title}
    </IonContent>
  </IonPage>
);

const titleText = defineMessage({
  id: 'test.title',
  message: 'Default Title',
});

MyPage.defaultProps = {
  title: i18n._(titleText),
};

export default MyPage;
