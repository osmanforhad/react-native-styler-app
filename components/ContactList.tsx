import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'osman forhad',
            status: 'full stack developer',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            uid: 2,
            name: 'Fakhrul',
            status: 'IT Enginner',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1689533448099-2dc408030f0f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            uid: 3,
            name: 'Sorif',
            status: 'Govt Teacher',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            uid: 4,
            name: 'Tajul',
            status: 'Web Developer',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1742421698641-02f5e59473ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ];
    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView style={styles.container} scrollEnabled={false}>
                {contacts.map((item) => {
                    return (
                        <View key={item.uid} style={styles.userCard}>
                            <Image
                                source={{
                                    uri: item.imageUrl
                                }}
                                style={styles.userImage}
                            />
                            <View>
                                <Text style={styles.userName}>{item.name}</Text>
                                <Text style={styles.userStatus}>{item.status}</Text>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4,
        backgroundColor: '#333333',
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 10,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    userStatus: {
        fontSize: 12,
        color: '#FFFFFF',
    },
})