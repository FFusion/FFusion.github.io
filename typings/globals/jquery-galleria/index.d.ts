// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/jquery-galleria/jquery-galleria.d.ts
declare namespace GalleriaJS {

	interface GalleriaOptions {
        dataSource: GalleriaEntry[];
        autoplay?: boolean;
		lightbox?: boolean;
	}

    interface GalleriaEntry {
        image?: string;
        thumbnail?: string;
        title?: string;
        description?: string;
    }

	interface GalleriaFactory {
        run(): GalleriaFactory;
        run(selector: String): GalleriaFactory;
        run(selector: String, options: GalleriaOptions): GalleriaFactory;

		loadTheme(url : String): GalleriaFactory;
		configure(options: GalleriaOptions): GalleriaFactory;

        ready( method: () => any): void;

        refreshImage(): GalleriaFactory;
        resize(): GalleriaFactory;
        load( data: GalleriaEntry[]): GalleriaFactory;
        setOptions( options: GalleriaOptions): GalleriaFactory;
	}

}

declare var Galleria: GalleriaJS.GalleriaFactory;