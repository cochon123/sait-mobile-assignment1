import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TWEETS = [
  {
    name: 'Elon Musk',
    handle: '@elonmusk',
    time: '2h',
    text: 'The future of AI is incredibly exciting. We are building something amazing at xAI.',
    replies: '12K',
    retweets: '45K',
    likes: '230K',
    avatarBg: '#1DA1F2',
    avatarInitial: 'E',
  },
  {
    name: 'NASA',
    handle: '@NASA',
    time: '4h',
    text: 'Hubble captures stunning image of a distant galaxy cluster. The universe never ceases to amaze.',
    replies: '2.1K',
    retweets: '15K',
    likes: '89K',
    avatarBg: '#1DA1F2',
    avatarInitial: 'N',
  },
  {
    name: 'TechCrunch',
    handle: '@TechCrunch',
    time: '1h',
    text: 'Breaking: Major tech company announces revolutionary new chip that promises 3x performance improvements.',
    replies: '856',
    retweets: '4.2K',
    likes: '18K',
    avatarBg: '#0ACF83',
    avatarInitial: 'T',
  },
  {
    name: 'React Native',
    handle: '@reactnative',
    time: '6h',
    text: 'Excited to announce the latest release of React Native with improved performance and new APIs!',
    replies: '342',
    retweets: '2.8K',
    likes: '12K',
    avatarBg: '#61DAFB',
    avatarInitial: 'R',
  },
  {
    name: 'The Verge',
    handle: '@verge',
    time: '3h',
    text: 'Electric vehicle sales hit record numbers in Q3 as more consumers make the switch to sustainable transportation.',
    replies: '1.2K',
    retweets: '5.6K',
    likes: '24K',
    avatarBg: '#7B61FF',
    avatarInitial: 'V',
  },
];

function Avatar({ initial, bg }: { initial: string; bg: string }) {
  return (
    <View style={[styles.avatar, { backgroundColor: bg }]}>
      <Text style={styles.avatarText}>{initial}</Text>
    </View>
  );
}

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Avatar initial="M" bg="#1DA1F2" />
      </View>
      <View style={styles.headerCenter}>
        <Text style={styles.xLogo}>𝕏</Text>
      </View>
      <View style={styles.headerRight}>
        <Text style={styles.headerIcon}>⚙️</Text>
      </View>
    </View>
  );
}

function TabBar() {
  return (
    <View style={styles.tabBar}>
      <View style={[styles.tab, styles.tabActive]}>
        <Text style={styles.tabTextActive}>For you</Text>
      </View>
      <View style={styles.tab}>
        <Text style={styles.tabText}>Following</Text>
      </View>
    </View>
  );
}

function Composer() {
  return (
    <View style={styles.composer}>
      <Avatar initial="M" bg="#1DA1F2" />
      <View style={styles.composerInput}>
        <Text style={styles.composerPlaceholder}>What is happening?!</Text>
      </View>
    </View>
  );
}

function Tweet({ name, handle, time, text, replies, retweets, likes, avatarBg, avatarInitial }: typeof TWEETS[0]) {
  return (
    <View style={styles.tweet}>
      <View style={styles.tweetLeft}>
        <Avatar initial={avatarInitial} bg={avatarBg} />
      </View>
      <View style={styles.tweetRight}>
        <View style={styles.tweetHeader}>
          <Text style={styles.tweetName} numberOfLines={1}>{name}</Text>
          <Text style={styles.tweetHandle} numberOfLines={1}> {handle} · {time}</Text>
        </View>
        <Text style={styles.tweetText}>{text}</Text>
        <View style={styles.tweetActions}>
          <View style={styles.actionGroup}>
            <Text style={styles.actionIcon}>💬</Text>
            <Text style={styles.actionCount}>{replies}</Text>
          </View>
          <View style={styles.actionGroup}>
            <Text style={styles.actionIcon}>🔁</Text>
            <Text style={styles.actionCount}>{retweets}</Text>
          </View>
          <View style={styles.actionGroup}>
            <Text style={styles.actionIcon}>❤️</Text>
            <Text style={styles.actionCount}>{likes}</Text>
          </View>
          <View style={styles.actionGroup}>
            <Text style={styles.actionIcon}>📤</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function BottomBar() {
  return (
    <View style={styles.bottomBar}>
      <View style={styles.bottomItem}>
        <Text style={styles.bottomIcon}>🏠</Text>
        <Text style={styles.bottomLabel}>Home</Text>
      </View>
      <View style={styles.bottomItem}>
        <Text style={styles.bottomIcon}>🔍</Text>
        <Text style={styles.bottomLabel}>Search</Text>
      </View>
      <View style={styles.bottomItem}>
        <Text style={styles.bottomIcon}>🔔</Text>
        <Text style={styles.bottomLabel}>Notifications</Text>
      </View>
      <View style={styles.bottomItem}>
        <Text style={styles.bottomIcon}>✉️</Text>
        <Text style={styles.bottomLabel}>Mail</Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Header />
      <TabBar />
      <ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
        <Composer />
        <View style={styles.divider} />
        {TWEETS.map((tweet, i) => (
          <View key={i}>
            <Tweet {...tweet} />
            <View style={styles.divider} />
          </View>
        ))}
        <TouchableOpacity
          style={styles.alertButton}
          onPress={() => Alert.alert('Alert Button pressed')}
        >
          <Text style={styles.alertButtonText}>Alert</Text>
        </TouchableOpacity>
        <View style={{ height: 80 }} />
      </ScrollView>
      <BottomBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E1E8ED',
  },
  headerLeft: {
    width: 40,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerRight: {
    width: 40,
    alignItems: 'flex-end',
  },
  xLogo: {
    fontSize: 24,
    fontWeight: '900',
  },
  headerIcon: {
    fontSize: 20,
  },
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E1E8ED',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 14,
  },
  tabActive: {
    borderBottomWidth: 3,
    borderBottomColor: '#1DA1F2',
  },
  tabText: {
    fontSize: 15,
    color: '#657786',
    fontWeight: '500',
  },
  tabTextActive: {
    fontSize: 15,
    fontWeight: '700',
  },
  feed: {
    flex: 1,
  },
  composer: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'flex-start',
  },
  composerInput: {
    flex: 1,
    marginLeft: 12,
    paddingTop: 4,
  },
  composerPlaceholder: {
    fontSize: 18,
    color: '#9CA3AF',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#E1E8ED',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 20,
  },
  tweet: {
    flexDirection: 'row',
    padding: 12,
  },
  tweetLeft: {
    marginRight: 12,
  },
  tweetRight: {
    flex: 1,
  },
  tweetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  tweetName: {
    fontWeight: '700',
    fontSize: 15,
  },
  tweetHandle: {
    fontSize: 14,
    color: '#657786',
  },
  tweetText: {
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 10,
  },
  tweetActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  actionGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 16,
  },
  actionCount: {
    fontSize: 12,
    color: '#657786',
  },
  bottomBar: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderTopColor: '#E1E8ED',
    paddingVertical: 8,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
  },
  bottomItem: {
    flex: 1,
    alignItems: 'center',
  },
  bottomIcon: {
    fontSize: 22,
  },
  bottomLabel: {
    fontSize: 10,
    color: '#657786',
    marginTop: 2,
  },
  alertButton: {
    backgroundColor: '#1DA1F2',
    marginHorizontal: 16,
    marginVertical: 20,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  alertButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
});
