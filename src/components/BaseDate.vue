<template>
  <time
    datetime="{{ timestamp }}"
    :title="humanFriendlyDate()">
    {{ diffForHumans() }}
  </time>
</template>

<script>
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
export default {
  props: {
    timestamp: {
      type: Number,
      required: true,
    },
  },
  methods: {
    diffForHumans() {
      return dayjs.unix(this.timestamp).fromNow();
    },
    humanFriendlyDate() {
      return dayjs.unix(this.timestamp).format('LLLL');
    },
  },
};
</script>
