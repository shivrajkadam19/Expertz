import { View, StyleSheet, Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, List, Divider } from 'react-native-paper';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.header}>
          <Avatar.Icon size={50} icon="account" />
          <View style={styles.userInfo}>
            <Title>shivraj kadam</Title>
            <Paragraph>+91 XXXXX31161</Paragraph>
            <Paragraph>Proud owner of 0 vehicles 😃</Paragraph>
          </View>
        </Card.Content>
      </Card>
      <List.Section>
        <List.Item
          title="Saved Addresses"
          description="Manage your saved addresses"
          left={() => <List.Icon icon="home" />}
        />
        <List.Item
          title="Queries & Feedback"
          left={() => <List.Icon icon="headphones" />}
        />
        <Divider />
        <List.Item
          title="About Hozzo"
          description="Know more about Hozzo"
          left={() => <List.Icon icon="information" />}
        />
        <Divider />
        <List.Item
          title="Logout"
          left={() => <List.Icon color="red" icon="logout" />}
        />
        <List.Item
          title="Delete account"
          description="Submit a request to delete your account"
          left={() => <List.Icon color="red" icon="delete" />}
        />
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    marginLeft: 16,
  },
});

export default ProfileScreen;
