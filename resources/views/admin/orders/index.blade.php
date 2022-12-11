@extends('admin.main.index')

@section('content')

    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Заказы</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Главная</a></li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="col-md-9 main-wrap ml-5">
                        <h4>
                            Новые заказы
                            <a href="{{route('orders.history')}}" class="btn btn-warning float-right m-1">История заказов</a>
                        </h4>
                        <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th>Трек номер</th>
                                <th>Сумма заказа</th>
                                <th>Статус</th>
                                <th>Просмотр</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($orders as $item)
                            <tr>
                                <td>{{$item->tracking_no}}</td>
                                <td>{{$item->total_price}}</td>
                                <td>{{$item->status == '0' ? 'в ожидании' : 'завершено'}}</td>
                                <td><a href="{{route('orders.show', $item->id)}}" class="btn btn-primary">Посмотреть</a></td>
                            </tr>
                            @endforeach
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>


        </div>
    </section>

@endsection
