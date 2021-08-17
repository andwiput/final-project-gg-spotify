export interface Track {
    album?:             Album;
    artists?:           Artist[];
    available_markets?: string[];
    disc_number?:       number;
    duration_ms?:       number;
    explicit?:          boolean;
    external_ids?:      ExternalIDS;
    external_urls?:     ExternalUrls;
    href?:              string;
    id?:                string;
    is_local?:          boolean;
    name?:              string;
    popularity?:        number;
    preview_url?:       string | null;
    track_number?:      number;
    type?:              string;
    uri?:               string;
}

export interface Tracks {
    tracks?: Track[];
}

export interface UserProfile {
    country?:       string;
    display_name?:  string;
    email?:         string;
    external_urls?: ExternalUrls;
    followers?:     Followers;
    href?:          string;
    id?:            string;
    images?:        Image[];
    product?:       string;
    type?:          string;
    uri?:           string;
}

export interface Followers {
    href?:  null;
    total?: number;
}

export interface Image {
    height: number | null;
    url:    string;
    width:  number | null;
}

export interface Album {
    album_type?:             string;
    artists?:                Artist[];
    available_markets?:      string[];
    external_urls?:          ExternalUrls;
    href?:                   string;
    id?:                     string;
    images?:                 Image[];
    name?:                   string;
    release_date?:           string | Date;
    release_date_precision?: string;
    type?:                   string;
    uri?:                    string;
}

export interface Artist {
    external_urls?: ExternalUrls;
    href?:          string;
    id?:            string;
    name?:          string;
    type?:          string;
    uri?:           string;
}

export interface ExternalUrls {
    spotify?: string;
}

export interface ExternalIDS {
    isrc?: string;
}