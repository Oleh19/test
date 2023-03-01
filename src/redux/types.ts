export type Todo = {
    id: number;
    title: string;
    description: string;
    status: boolean;
  };
  
  export type TodosState = {
      list: Todo[]
  }

  export type addItems = {
    title: string;
    description: string;
  };