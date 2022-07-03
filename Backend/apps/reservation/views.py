from django.shortcuts import redirect, render

from apps.reservation.models import Desktop, Reservation


# Create your views here.
def check_reservation(request, pk=None):
    """Make unavailable a desktop for a period of time"""
    if request.method == 'POST':
        if pk:
            # invalid_date = False
            # Obtener el desktop
            desktop = Desktop.objects.get(pk=pk)
            user_id = request.user
            start_time = request.session['start_hour']
            end_time = request.session['finish_hour']

            # Chequear los días hábiles
            # Caso 1: un escritorio está reservado antes del start_time,
            # y el end_time es requerido después del start_time
            case_1 = Reservation.objects.filter(desktop=desktop,
                                                start_hour__lte=start_time,
                                                finish_hour__gte=start_time).exists()
            # Caso 2: un escritorio está reservado antes de que se requiera el end_time,
            # y el end_time es requerido después del end_time.
            case_2 = Reservation.objects.filter(desktop=desktop,
                                                start_hour__lte=end_time,
                                                finish_hour__gte=end_time).exists()
            case_3 = Reservation.objects.filter(desktop=desktop,
                                                start_hour__gte=start_time,
                                                finish_hour__lte=end_time).exists()
            # Si alguno de los casos es true, abortar y renderizar error.
            if case_1 or case_2 or case_3:
                # Buscar si se puede desactivar el botón de reserva en estos casos.
                return render(request, "Volver a la pag de reservación.",
                              {"errors": "This desktop is unavailable."})
            # Si la fecha es válida.
            reservarion = Reservation(
                start_time=start_time,
                end_time=end_time,
                desktop_id=desktop.id,
                user_id=user_id.id
            )
            # Guardar reservación.
            reservarion.save()
            # Redirigir a página de éxito.
            return redirect("página de current reserves")
        return render(request, "página siguiente.")
