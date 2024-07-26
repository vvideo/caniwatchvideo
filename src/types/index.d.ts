export {}

declare global {
    interface FontData {
        family: string;
        fullName: string;
        postscriptName: string;
        style: string;
    }

    interface Window {
        documentPictureInPicture?: unknown;
        queryLocalFonts?: () => Promise<FontData[]>;
        appData: {
            pageId: string;
            lang: string;
        };
    }

    interface BatteryManager {
        charging: boolean;
        chargingTime: number;
        dischargingTime: number;
        level: number;
    }

    interface Gamepad {
        hand?: 'left' | 'right' | '';
    }

    interface Navigator {
        deviceMemory?: number;
        getBattery?(): Promise<BatteryManager>;
        connection?: {
            downlink: number;
            effectiveType: string;
            rtt: number;
            saveData: boolean;
            type?: string;
            downlinkMax?: number;
        };

        msMaxTouchPoints?: number;

        getAutoplayPolicy?: (type: 'mediaelement' | 'audiocontext' |  AudioContext | HTMLMediaElement) => 'allowed' | 'allowed-muted' | 'disallowed';
    }
}
