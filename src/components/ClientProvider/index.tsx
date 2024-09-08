'use client';

import * as ChannelService from '@channel.io/channel-web-sdk-loader';
import { PropsWithChildren, useEffect } from 'react';

function ClientProver({ children }: PropsWithChildren) {
  useEffect(() => {
    ChannelService.loadScript();
    ChannelService.boot({
      pluginKey: `${process.env.NEXT_PUBLIC_CHANNEL_IO_PLUGIN_KEY}`,
    });
  }, []);

  return children;
}

export default ClientProver;
