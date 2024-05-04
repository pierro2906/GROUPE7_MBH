export interface IEndpoint {
  path: { [key: string]: string };
  method: string;
  private: boolean;
}
