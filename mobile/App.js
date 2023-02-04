import { NavigationContainer } from '@react-navigation/native';
import { StripeProvider } from '@stripe/stripe-react-native';

import Routes from './src/routes/';

const App = () => {
  return (
    <NavigationContainer>
      <StripeProvider merchantIdentifier="testesNoCubico">
      <Routes />
      </StripeProvider>
    </NavigationContainer>
  );
};

export default App;
