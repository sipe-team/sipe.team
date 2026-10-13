'use client';

import { PropsWithChildren, useEffect } from 'react';

import { usePathname } from 'next/navigation';

import * as ChannelService from '@channel.io/channel-web-sdk-loader';

function ClientProver({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const isForms = pathname === '/forms' || pathname.startsWith('/forms/');
  useEffect(() => {
    if (isForms) {
      ChannelService.shutdown();
      return;
    }
    ChannelService.loadScript();
    ChannelService.boot({
      pluginKey: `${process.env.NEXT_PUBLIC_CHANNEL_IO_PLUGIN_KEY}`,
    });
  }, [isForms]);

  return children;
}

export default ClientProver;
