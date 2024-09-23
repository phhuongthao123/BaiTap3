import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NotificationScreen = () => {
  const notifications = [
    {
      id: '1',
      title: 'Bước 1 Xác định nhu cầu khách hàng',
      description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
      date: '20/08/2020, 06:00',
      icon: 'checkmark-circle',
    },
    {
      id: '2',
      title: 'Bạn có khách hàng mới!',
      description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
      date: '20/08/2020, 06:00',
      icon: 'people',
    },
    {
      id: '3',
      title: 'Khách hàng được chia sẻ bị trùng',
      description: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
      date: '20/08/2020, 06:00',
      icon: 'people',
    },
    {
      id: '4',
      title: 'Khách hàng được thêm bị trùng',
      description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
      date: '20/08/2020, 06:00',
      icon: 'people',
    },
    {
      id: '5',
      title: 'Công việc sắp đến hạn trong hôm nay',
      description: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
      date: '20/08/2020, 06:00',
      icon: 'checkmark-circle',
    },
    {
      id: '6',
      title: 'Công việc đã quá hạn',
      description: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
      date: '20/08/2020, 06:00',
      icon: 'checkmark-circle',
    },
    {
      id: '7',
      title: 'Khách hàng mới được thêm vào hệ thống',
      description: 'Chúc mừng, bạn vừa thêm thành công một khách hàng mới vào hệ thống.',
      date: '19/08/2020, 06:00',
      icon: 'people',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Ionicons name={item.icon} size={24} color="#3b82f6" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Thông báo</Text>
      </View>
      {/* FlatList */}
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
header: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 20 : 30,  // Tăng paddingTop
    paddingBottom: 15,  // Tăng paddingBottom
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
},
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContent: {
    paddingHorizontal: 10,
    paddingTop: 10,  // Giảm khoảng cách cho phần nội dung bên dưới
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  date: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
});

export default NotificationScreen;
