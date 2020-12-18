export interface Project{
    name: string;
    fullName: string;
    private: boolean;
    url:string;
    avatarUrl?: string;
    languages?: string[];
    contributors?: string[];
    homepage?: string
}