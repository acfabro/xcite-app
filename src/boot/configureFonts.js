import { Font } from 'expo';

export default async () => {
    await Font.loadAsync({
        'AdihausDIN': require('../../assets/SS20APAC/fonts/AdihausDIN-Regular.ttf'),
        'AdihausDIN-Bold': require('../../assets/SS20APAC/fonts/AdihausDIN-Bold.ttf'),
        'adineue PRO': require('../../assets/SS20APAC/fonts/adineuePRO-Regular.ttf'),
        'adineue PRO-Bold': require('../../assets/SS20APAC/fonts/adineuePRO-Bold.ttf'),
        'adineue PRO-Black': require('../../assets/SS20APAC/fonts/adineuePRO-Black.ttf'),
    });
};
