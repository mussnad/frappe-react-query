import { FrappeApp, FrappeAuth, FrappeCall } from '@mussnad/frappe-js-client'
import { FrappeDB } from '@mussnad/frappe-js-client/dist/db'
import { FrappeFileUpload } from '@mussnad/frappe-js-client/dist/file'
import { Error } from '@mussnad/frappe-js-client/dist/frappe/types'
import { Filter, FrappeDoc, GetDocListArgs } from '@mussnad/frappe-js-client/dist/db/types'
import { FileArgs } from '@mussnad/frappe-js-client/dist/file/types'
import { Socket } from 'socket.io-client'
import {
    AuthCredentials,
    AuthResponse,
    OTPCredentials,
    UserPassCredentials,
} from '@mussnad/frappe-js-client/dist/auth/types'
import { SWRConfiguration, SWRResponse, Key } from 'swr'

export type {
    OTPCredentials,
    UserPassCredentials,
    AuthCredentials,
    AuthResponse,
    FrappeDoc,
    GetDocListArgs,
    Filter,
    FileArgs,
    Error as FrappeError,
    SWRConfiguration,
    SWRResponse,
    Key,
}

export interface FrappeConfig {
    /** The URL of your Frappe server */
    url: string
    tokenParams?: TokenParams
    app: FrappeApp
    auth: FrappeAuth
    db: FrappeDB
    call: FrappeCall
    file: FrappeFileUpload
    socket?: Socket
}

export interface TokenParams {
    /** Whether to use token for API calls */
    useToken: boolean
    /** Function that returns the token as a string - this could be fetched from LocalStorage or auth providers like Firebase, Auth0 etc. */
    token?: () => string
    /** Type of token to be used for authentication */
    type: 'Bearer' | 'token'
}

export interface SearchResult {
    value: string
    label: string
    description: string
}

export interface ViewerEventData {
    doctype: string
    docname: string
    users: string[]
}

export interface DocumentUpdateEventData {
    doctype: string
    name: string
    modified: string
}

export interface DocTypeListUpdateEventData {
    doctype: string
    name: string
    user: string
}

export interface FrappeFileUploadResponse {
    /** Name of the file documnet in the database */
    name: string
    owner: string
    creation: string
    modified: string
    modified_by: string
    docstatus: 0 | 1 | 2
    idx: number
    /** Name of the uploaded file */
    file_name: string
    /** File is not accessible by guest users */
    is_private: 1 | 0
    is_home_folder: 0 | 1
    is_attachments_folder: 0 | 1
    /** File size in bytes */
    file_size: number
    /** Path of the file ex: /private/files/file_name.jpg  */
    file_url: string
    folder: string
    is_folder: 0 | 1
    /** Doctype the file is linked to */
    attached_to_doctype: string
    /** Document the file is linked to */
    attached_to_name: string
    content_hash: string
    uploaded_to_dropbox: 0 | 1
    uploaded_to_google_drive: 0 | 1
    doctype: 'File'
}
