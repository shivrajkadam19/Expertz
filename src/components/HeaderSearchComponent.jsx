import * as React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Searchbar, Card,IconButton } from 'react-native-paper';

const HeaderSearchComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 30 }}>
          Expertz
        </Text>
        <TouchableOpacity style={styles.addressCard}>
          <Text style={styles.addressText}>No address found</Text>
          <Text style={styles.tapToSelectText}>tap to select location</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search Location"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchbar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 80,
    height: 30,
    resizeMode: 'contain',
  },
  addressCard: {
    backgroundColor: '#a29bfe',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'column',
    elevation: 5
  },
  addressText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  tapToSelectText: {
    fontSize: 12,
    color: '#757575',
    marginLeft: 5,
  },
  searchContainer: {
    marginHorizontal: 10,
  },
  searchbar: {
    borderRadius: 10,
    elevation: 2,
    borderColor: '#a1d5d4',
    backgroundColor: 'white'
  },
});

export default HeaderSearchComponent;
