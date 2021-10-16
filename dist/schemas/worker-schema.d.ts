import { Document } from 'mongoose';
export declare type workerDocument = worker & Document;
export declare class worker {
    name: string;
    pass: string;
}
export declare const WorkerSchema: import("mongoose").Schema<Document<worker, any, any>, import("mongoose").Model<Document<worker, any, any>, any, any, any>, {}>;
